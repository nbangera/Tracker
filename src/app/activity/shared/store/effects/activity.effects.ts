import { Activity } from "./../../model/activity";
import {
  LoadActivities,
  ActivityActionTypes,
  LoadActivitiesSuccess,
  LoadActivitiesFail,
  AddActivitySuccess,
  AddActivityFail,
  AddActivity
} from "./../actions/activity.actions";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import {
  switchMap,
  map,
  catchError,
  takeUntil,
  pluck,
  mergeMap
} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ActivityEffects {
  constructor(private actions$: Actions, private afs: AngularFirestore) {}

  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType(ActivityActionTypes.Load_Activities),
    //switchMap so that it only accepts latest request and ignores previous request.
    //user might click fetch activities button on several occasion but we are concerned with only last request
    switchMap(() =>
      this.afs
        .collection<Activity>("activities")
        .valueChanges()
        .pipe(
          takeUntil(
            this.actions$.ofType(ActivityActionTypes.Load_Activity_Destroy)
          )
        )
    ),
    map(
      acitivities => new LoadActivitiesSuccess({ activities: acitivities }),
      catchError(error => of(new LoadActivitiesFail({ error: error })))
    )
  );

  @Effect()
  addActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.Add_Activity),
    //pluck("payload", "activity"),
    map((action: AddActivity) => action.payload.activity),
    mergeMap(activityObj => {
      const id = this.afs.collection<Activity>("activities").add(activityObj);
      return of({ id: id, activity: activityObj });
    }),
    map((next: { id: string; activity: Activity }) => {
      return this.afs
        .doc<Activity>(`activities/${next.id}`)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.data() as Activity;
            data.id = changes.payload.id;
            return data;
          })
        );
    }),
    switchMap(activity => {
      activity.subscribe(r => {
        return new AddActivitySuccess({ activity: r });
      });
    })
  );
}
