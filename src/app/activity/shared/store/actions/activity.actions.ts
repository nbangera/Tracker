import { Action } from "@ngrx/store";
import { Activity } from "../../model/activity";

export enum ActivityActionTypes {
  Load_Activities = "[Activity] Load Activities",
  Load_Activities_Success = "[Activity] Load Activities Success",
  Load_Activities_Fail = "[Activity] Load Activities Fail",
  Load_Activity_Destroy = "[Activity] Load Activity Destroy",
  Add_Activity_Success = "[Activity] Add Activity Success",
  Add_Activity = "[Activity] Add Activity",
  Add_Activity_Fail = "[Activity] Add Activity Fail",
  Update_Activity_Success = "[Activity] Update Activity Success",
  Update_Activity = "[Activity] Update Activity",
  Update_Activity_Fail = "[Activity] Update Activity Fail"
}

export class LoadActivities implements Action {
  readonly type = ActivityActionTypes.Load_Activities;
}

export class LoadActivitiesSuccess implements Action {
  readonly type = ActivityActionTypes.Load_Activities_Success;
  constructor(public payload: { activities: Activity[] }) {}
}

export class LoadActivitiesFail implements Action {
  readonly type = ActivityActionTypes.Load_Activities_Fail;
  constructor(public payload: { error: string }) {}
}

export class AddActivity implements Action {
  readonly type = ActivityActionTypes.Add_Activity;
  constructor(public payload: { activity: Activity }) {}
}

export class AddActivitySuccess implements Action {
  readonly type = ActivityActionTypes.Add_Activity_Success;
  constructor(public payload: { activity: Activity }) {}
}

export class AddActivityFail implements Action {
  readonly type = ActivityActionTypes.Add_Activity_Fail;
  constructor(public payload: { error: string }) {}
}

export class LoadActivityDestroy implements Action {
  readonly type = ActivityActionTypes.Load_Activity_Destroy;
}

export type ActivityActions =
  | LoadActivities
  | LoadActivitiesSuccess
  | LoadActivitiesFail
  | AddActivity
  | AddActivitySuccess
  | AddActivityFail
  | LoadActivityDestroy;
