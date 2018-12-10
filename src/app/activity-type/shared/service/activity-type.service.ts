import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { ActivityType } from '../model/activity-type';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  constructor(private afs: AngularFirestore) { }

  getActivityTypes():Observable<ActivityType[]>{
     return this.afs.collection<ActivityType>('activitytypes').snapshotChanges().pipe(map(change => {
      return change.map(doc => {
        const data = doc.payload.doc.data() as ActivityType
        const id = doc.payload.doc.id
        return {...data,id };
      })
    }))
  };

  addActivityType(activityType:ActivityType):Observable<ActivityType>{
    const id = this.afs.createId();
    const data =  {...activityType,id}
    this.afs.collection<ActivityType>("activitytypes").doc(id).set(data);
    return of(data);
  };

  updateActivityType(activityType:ActivityType):Observable<ActivityType>{
    const id = activityType.id;
    const data = activityType;
    this.afs.collection<ActivityType>("activitytypes").doc(id).set(data);
    return of(data);
  };

  getActivityType(activityTypeId:string):Observable<ActivityType>{
    return this.afs.doc<ActivityType>(`activitytypes/${activityTypeId}`)
    .snapshotChanges().pipe(
      map(changes => {
        const data = changes.payload.data() as ActivityType;
        const id = changes.payload.id;
        console.log(data);
        return {...data,id};
      })
      // ,catchError((error) => of(new FetchActivityFail({ error: error })))
    )
  };
}
