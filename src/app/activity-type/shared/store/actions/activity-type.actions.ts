import { ActivityType } from './../../model/activity-type';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum ActivityTypeActionTypes {
  Load_All_Activity_Types = '[ActivityType] Load All ActivityTypes',
  Load_All_Activity_Types_Success = '[ActivityType] Load All ActivityTypes Success',
  Load_All_Activity_Types_Fail = '[ActivityType] Load All ActivityTypes Fail',
  Load_Activity_Type = '[ActivityType] Load ActivityType',
  Load_Activity_Type_Success = '[ActivityType] Load ActivityType Success',
  Load_Activity_Type_Fail = '[ActivityType] Load ActivityType Fail',
  Add_Activity_Type = '[ActivityType] Add ActivityType',
  Add_Activity_Type_Success = '[ActivityType] Add ActivityType Success',
  Add_Activity_Type_Fail = '[ActivityType] Add ActivityType Fail',
  Update_Activity_Type = '[ActivityType] Update ActivityType',
  Update_Activity_Type_Success = '[ActivityType] Update ActivityType Success',
  Update_Activity_Type_Fail = '[ActivityType] Update ActivityType Fail',
  Delete_Activity_Type = '[ActivityType] Delete ActivityType',
  Delete_Activity_Type_Success = '[ActivityType] Delete ActivityType Success',
  Delete_Activity_Type_Fail = '[ActivityType] Delete ActivityType Fail'

}

export class LoadAllActivityTypes implements Action {
  readonly type = ActivityTypeActionTypes.Load_All_Activity_Types;
}
export class LoadAllActivityTypesSuccess implements Action {
  readonly type = ActivityTypeActionTypes.Load_All_Activity_Types_Success;
  constructor(public payload: { activityTypes: ActivityType[] }) { }
}

export class LoadAllActivityTypesFail implements Action {
  readonly type = ActivityTypeActionTypes.Load_All_Activity_Types_Fail;
  constructor(public payload : {error:any}){}
}

export class LoadActivityType implements Action {
  readonly type = ActivityTypeActionTypes.Load_Activity_Type;
}

export class LoadActivityTypeSuccess implements Action {
  readonly type = ActivityTypeActionTypes.Load_Activity_Type_Success;
  constructor(public payload: { activityType: ActivityType }) { }
}

export class LoadActivityTypeFail implements Action {
  readonly type = ActivityTypeActionTypes.Load_Activity_Type_Fail;
  constructor(public payload : {error:any}){}
}

export class AddActivityType implements Action {
  readonly type = ActivityTypeActionTypes.Add_Activity_Type;
}

export class AddActivityTypeSuccess implements Action {
  readonly type = ActivityTypeActionTypes.Add_Activity_Type_Success;
  constructor(public payload: { activityType: ActivityType }) { }
}

export class AddActivityTypeFail implements Action {
  readonly type = ActivityTypeActionTypes.Add_Activity_Type_Fail;
  constructor(public payload : {error:any}){}
}

export class UpdateActivityType implements Action {
  readonly type = ActivityTypeActionTypes.Update_Activity_Type;
}

export class UpdateActivityTypeSuccess implements Action {
  readonly type = ActivityTypeActionTypes.Update_Activity_Type_Success;
  constructor(public payload: { activityType: Update<ActivityType>}) { }
}

export class UpdateActivityTypeFail implements Action {
  readonly type = ActivityTypeActionTypes.Update_Activity_Type_Fail;
  constructor(public payload : {error:any}){}
}

export class DeleteActivityType implements Action {
  readonly type = ActivityTypeActionTypes.Delete_Activity_Type;
}

export class DeleteActivityTypeSuccess implements Action {
  readonly type = ActivityTypeActionTypes.Delete_Activity_Type_Success;
  constructor(public payload: { activityType: ActivityType }) { }
}

export class DeleteActivityTypeFail implements Action {
  readonly type = ActivityTypeActionTypes.Delete_Activity_Type_Fail;
  constructor(public payload : {error:any}){}
}


export type ActivityTypeActions = LoadAllActivityTypes | LoadAllActivityTypesSuccess | LoadAllActivityTypesFail
  | LoadActivityType | LoadActivityTypeSuccess | LoadAllActivityTypesFail
  | AddActivityType | AddActivityTypeSuccess | AddActivityTypeFail
  | UpdateActivityType | UpdateActivityTypeSuccess | UpdateActivityTypeFail
  | DeleteActivityType | DeleteActivityTypeSuccess | DeleteActivityTypeFail
