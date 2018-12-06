import { Action } from '@ngrx/store';

export enum ActivityTypeActionTypes {
  Load_All_Activity_Types = '[ActivityType] Load All ActivityTypes',
  Load_All_Activity_Types_Success = '[ActivityType] Load All ActivityTypes Success',
  Load_All_Activity_Types_Fail = '[ActivityType] Load All ActivityTypes Fail',
  Load_Activity_Types = '[ActivityType] Load ActivityTypes',
  Load_Activity_Types_Success = '[ActivityType] Load ActivityTypes Success',
  Load_Activity_Types_Fail = '[ActivityType] Load ActivityTypes Fail',
  Add_Activity_Types = '[ActivityType] Add ActivityTypes',
  Add_Activity_Types_Success = '[ActivityType] Add ActivityTypes Success',
  Add_Activity_Types_Fail = '[ActivityType] Add ActivityTypes Fail',
  Update_Activity_Types = '[ActivityType] Update ActivityTypes',
  Update_Activity_Types_Success = '[ActivityType] Update ActivityTypes Success',
  Update_Activity_Types_Fail = '[ActivityType] Update ActivityTypes Fail',
  Delete_Activity_Types = '[ActivityType] Delete ActivityTypes',
  Delete_Activity_Types_Success = '[ActivityType] Delete ActivityTypes Success',
  Delete_Activity_Types_Fail = '[ActivityType] Delete ActivityTypes Fail'

}

export class LoadAllActivityTypes implements Action {
  readonly type = ActivityTypeActionTypes.Load_All_Activity_Types;
}

export type ActivityTypeActions = LoadAllActivityTypes;
