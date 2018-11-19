import { Activity } from "./../../model/activity";
import {
  LoadActivities,
  ActivityActionTypes,
  LoadActivitiesSuccess,
  LoadActivitiesFail,
  AddActivitySuccess,
  AddActivityFail
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
    pluck("payload", "activity"),
    mergeMap(
      (activityObj) => this.afs.collection("activities").add(activityObj)
      ,
      map((activityId:string)=>{

            const createdActivity = this.afs
          .collection<Activity>("activities")
          .doc(activityId);
        new AddActivitySuccess({ activity: createdActivity });
      }

        //const createActivity:Activity =new Activity{};
        //new AddActivitySuccess({activity:createActivity}))

      // map(
      // //   (acitivityId: string) => {
      // //   //id2: string = acitivityId;
      // //   const createdActivity = this.afs
      // //     .collection("activities")
      // //     .doc(acitivityId);
      // //   new AddActivitySuccess({ activity: createdActivity });
      // // },
      //  catchError(error => of(new AddActivityFail({ error: error }))))
    )
  );
}
