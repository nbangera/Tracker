import { AddActivity, LoadActivities, FetchActivity, UpdateActivity, UpdateActivitySuccess } from './../shared/store/actions/activity.actions';
import { getActivities,getAllActivities, getSelectedActivity } from './../shared/store/reducers/activity.reducer';
import { State } from './../../store/index';
import { Activity } from './../shared/model/activity';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities$ : Observable<Activity[]>;
  //activity: Observable<Activity>;
  activity :Activity= {id:'',title:'',description:'',type:'',complete:false};
  selectedActivity$:Observable<Activity>
  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadActivities());
    this.activities$=this.store.select(getAllActivities);
    //console.log(this.activities$)
  //   this.activity = {
  //     id: '';
  // title: '';
  // description: string;
  // type: string;
  // complete: boolean;
  //   };
  }

  createActivity(){

    this.store.dispatch(new AddActivity({activity:this.activity}))
  }

  viewDetail(id){
    console.log('click called');
    console.log(id);
      this.store.dispatch(new FetchActivity({activityId:id}));
      this.selectedActivity$=  this.store.select(getSelectedActivity);

  }


  updateActivity(form:NgForm){
    if(form)
    {

      const activity = form.value as Activity
      console.log(activity);
      this.store.dispatch(new UpdateActivity({activity:activity}));
    }

    //this.store.dispatch(new UpdateActivity({activity:activity}));
  }

  editDetail(id){
    this.store.dispatch(new FetchActivity({activityId:id}));
    this.selectedActivity$=  this.store.select(getSelectedActivity);
  }

}
