import { Update } from '@ngrx/entity';
import { Activity } from "./../../model/activity";
import {
  LoadActivities,
  ActivityActionTypes,
  LoadActivitiesSuccess,
  LoadActivitiesFail,
  AddActivitySuccess,
  AddActivityFail,
  AddActivity,
  FetchActivitySuccess,
  FetchActivityFail,
  UpdateActivity,
  UpdateActivitySuccess
} from "./../actions/activity.actions";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
} from "@angular/fire/firestore";
import {
  switchMap,
  map,
  catchError,
  takeUntil,
  pluck,
  mergeMap,
  tap
} from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable()
export class ActivityEffects {
  constructor(private actions$: Actions, private afs: AngularFirestore) { }

  // @Effect()
  // loadActivities$ = this.actions$.pipe(
  //   ofType(ActivityActionTypes.Load_Activities),
  //   //switchMap so that it only accepts latest request and ignores previous request.
  //   //user might click fetch activities button on several occasion but we are concerned with only last request
  //   switchMap(() =>{
  //     return this.afs
  //       .collection<Activity>("activities")
  //       .snapshotChanges().pipe(
  //         map((change:DocumentChangeAction<Activity>[])=>{

  //         let activitiesArray:Activity[] = [];
  //         return change.forEach((element:DocumentChangeAction<Activity>) => {
  //        //console.log(element.payload.doc.data() as Activity)
  //        //console.log(element.payload.doc.id)
  //          const data = element.payload.doc.data() as Activity;
  //          const id = element.payload.doc.id;
  //           //activitiesArray.push({id,...data})
  //              return {id,...data}
  //         });
  //         //const id = actions.payload.id;
  //         //const activityData = {id,...data}
  //          console.log(activitiesArray)
  //         }),
  //       tap(activities=>console.log(activities))
  //     )
  //       // .pipe(map((changes)=>{
  //       //     const data = changes.payload.data() as Activity;
  //       //     const id = changes.payload.id;
  //       //     const activityData = {id,...data}
  //       //       console.log(activityData);
  //       //    return activityData;
  //       //   }
  //       // ),
  //       //  map(data=>new  LoadActivitiesSuccess({ activities: data })),
  //       //  catchError(error => of(new LoadActivitiesFail({ error: error })))

  //         // takeUntil(
  //         //   this.actions$.ofType(ActivityActionTypes.Load_Activity_Destroy)
  //         // ),

  //       }
  //   )
  //   // map(
  //   //   acitivities => new LoadActivitiesSuccess({ activities: acitivities }),
  //   //   catchError(error => of(new LoadActivitiesFail({ error: error })))
  //   // )
  // );

  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType(ActivityActionTypes.Load_Activities),
    //switchMap so that it only accepts latest request and ignores previous request.
    //user might click fetch activities button on several occasion but we are concerned with only last request
    switchMap(() => {
      return this.afs
        .collection<Activity>("activities")
        .snapshotChanges().pipe(
          map(change => {
            return change.map(doc => {
              const data = doc.payload.doc.data() as Activity
              const id = doc.payload.doc.id
              return {...data,id };
            })
          }),
          tap(activities => console.log(activities)),
          map(activities => new LoadActivitiesSuccess({ activities: activities })),
          catchError(error => of(new LoadActivitiesFail({ error: error })))
        )
    })
  );


  @Effect()
  fetchActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.Fetch_Activity),
    pluck("payload", "activityId"),
    switchMap((activityId: string) => {
      return this.afs.doc<Activity>(`activities/${activityId}`)
        .snapshotChanges().pipe(
          map(changes => {
            const data = changes.payload.data() as Activity;
            data.id = changes.payload.id;
            console.log(data);
            return new FetchActivitySuccess({ activity: data });
          }),
          catchError((error) => of(new FetchActivityFail({ error: error })))
        )
    })
  )

  @Effect()
  addActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.Add_Activity),
    //pluck("payload", "activity"),
    map((action: AddActivity) => action.payload.activity),
    switchMap(activityObj => {
      //const id = this.afs.collection<Activity>("activities").add(activityObj);
      const id = this.afs.createId();
      const data =  {...activityObj,id}
      this.afs.collection<Activity>("activities").doc(id).set(data);
      return of(data);
    }),
    map(data=> new AddActivitySuccess({ activity: data })),
    catchError(error=>of(new AddActivityFail(error)))
  );

@Effect()
updateActivity$ = this.actions$.pipe(
  ofType(ActivityActionTypes.Update_Activity),
  //pluck("payload", "activity"),
  map((action: UpdateActivity) => action.payload.activity),
  switchMap((payload:Activity) => {
    //const id = this.afs.collection<Activity>("activities").add(activityObj);
    const id = payload.id;
    const data = payload;
    this.afs.doc<Activity>(`activities/${id}`).update(data);
    return of(data);
  }),
  map((data:Activity)=> new UpdateActivitySuccess({ activity :{id:data.id,changes: data }})),
  catchError(error=>of(new AddActivityFail(error)))
);
}
