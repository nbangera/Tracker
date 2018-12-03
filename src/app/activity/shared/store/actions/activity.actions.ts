
import { Action } from "@ngrx/store";
import { Activity } from "../../model/activity";
import { Update } from "@ngrx/entity";

export enum ActivityActionTypes {
  Load_Activities = "[Activity] Load Activities",
  Load_Activities_Success = "[Activity] Load Activities Success",
  Load_Activities_Fail = "[Activity] Load Activities Fail",
  Fetch_Activity = "[Activity] Fetch Activity",
  Fetch_Activity_Success = "[Activity] Fetch Activity Success",
  Fetch_Activity_Fail = "[Activity] Fetch Activity Fail",
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

export class FetchActivity implements Action {
  readonly type = ActivityActionTypes.Fetch_Activity;
  constructor(public payload: { activityId: string }) { }
}

export class FetchActivitySuccess implements Action {
  readonly type = ActivityActionTypes.Fetch_Activity_Success;
  constructor(public payload: { activity: Activity }) { }
}

export class FetchActivityFail implements Action {
  readonly type = ActivityActionTypes.Fetch_Activity_Fail;
  constructor(public payload: { error: string }) { }
}

export class LoadActivitiesSuccess implements Action {
  readonly type = ActivityActionTypes.Load_Activities_Success;
  constructor(public payload: { activities: Activity[] }) { }
}

export class LoadActivitiesFail implements Action {
  readonly type = ActivityActionTypes.Load_Activities_Fail;
  constructor(public payload: { error: string }) { }
}

export class AddActivity implements Action {
  readonly type = ActivityActionTypes.Add_Activity;
  constructor(public payload: { activity: Activity }) { }
}

export class AddActivitySuccess implements Action {
  readonly type = ActivityActionTypes.Add_Activity_Success;
  constructor(public payload: { activity: Activity }) { }
}

export class AddActivityFail implements Action {
  readonly type = ActivityActionTypes.Add_Activity_Fail;
  constructor(public payload: { error: any }) { }
}

export class LoadActivityDestroy implements Action {
  readonly type = ActivityActionTypes.Load_Activity_Destroy;
}

export class UpdateActivity implements Action {
  readonly type = ActivityActionTypes.Update_Activity;
  constructor(public payload: { activity: Activity }) { }
}

export class UpdateActivitySuccess implements Action {
  readonly type = ActivityActionTypes.Update_Activity_Success;
  constructor(public payload: { activity: Update<Activity> }) { }
}

export class UpdateActivityFail implements Action {
  readonly type = ActivityActionTypes.Update_Activity_Fail;
  constructor(public payload: { error: any }) { }
}

export type ActivityActions =
  | LoadActivities
  | LoadActivitiesSuccess
  | LoadActivitiesFail
  | FetchActivity
  | FetchActivitySuccess
  | FetchActivityFail
  | AddActivity
  | AddActivitySuccess
  | AddActivityFail
  | LoadActivityDestroy
  | UpdateActivity
  | UpdateActivitySuccess
  | UpdateActivityFail;
