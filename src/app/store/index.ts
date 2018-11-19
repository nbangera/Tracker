import * as fromActivities from './../activity/shared/store/reducers/activity.reducer';
import { Activity } from './../activity/shared/model/activity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
 activity: fromActivities.State
}

export const reducers: ActionReducerMap<State> = {
  activity : fromActivities.reducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
