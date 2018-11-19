import { AddActivity } from './../shared/store/actions/activity.actions';
import { getActivities,getAllActivities } from './../shared/store/reducers/activity.reducer';
import { State } from './../../store/index';
import { Activity } from './../shared/model/activity';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities$ : Observable<Activity[]>;
  activity$: Observable<Activity>;
  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.activities$=this.store.select(getAllActivities);
  }

  createActivity(){

    //this.store.dispatch(new AddActivity({this.activity$}))
  }

}
