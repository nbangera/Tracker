import { ActivityTypeActions, ActivityTypeActionTypes } from './../actions/activity-type.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { ActivityType } from '../../model/activity-type';
import { SelectorFlags } from '@angular/core/src/render3/interfaces/projection';


export interface State extends EntityState<ActivityType> {
  selectedActivityTypeId: string | null,
  loaded: boolean,
  loading: boolean,
  error: string
};

export const activityTypeAdapter: EntityAdapter<ActivityType> = createEntityAdapter<ActivityType>();

export const defaultActivityType = {
  ids: {},
  selectedActivityTypeId: "",
  loaded: false,
  loading: false,
  error: ""
}

export const initialState: State = activityTypeAdapter.getInitialState(defaultActivityType);

export function reducer(state = initialState, action: ActivityTypeActions): State {
  switch (action.type) {
    case ActivityTypeActionTypes.Load_All_Activity_Types:
      {
        return { ...state, loaded: false, loading: true }
      }
    case ActivityTypeActionTypes.Load_All_Activity_Types_Success:
      {
        return activityTypeAdapter.addAll(action.payload.activityTypes, { ...state, loaded: true, loading: false, error: '' });
      }
    case ActivityTypeActionTypes.Load_All_Activity_Types_Fail:
      {
        return { ...state, loaded: true, loading: false, error: action.payload.error }
      }
    case ActivityTypeActionTypes.Add_Activity_Type:
      {
        return { ...state, loaded: false, loading: true }
      }
    case ActivityTypeActionTypes.Add_Activity_Type_Success:
      {
        return activityTypeAdapter.addOne(action.payload.activityType, { ...state, loaded: true, loading: false, error: '' });
      }
    case ActivityTypeActionTypes.Add_Activity_Type_Fail:
      {
        return { ...state, loaded: true, loading: false, error: action.payload.error }
      }
    case ActivityTypeActionTypes.Update_Activity_Type:
      {
        return { ...state, loaded: false, loading: true }
      }
    case ActivityTypeActionTypes.Update_Activity_Type_Success:
      {
        return activityTypeAdapter.updateOne(action.payload.activityType, { ...state, loaded: true, loading: false, error: '' });
      }
    case ActivityTypeActionTypes.Update_Activity_Type_Fail:
      {
        return { ...state, loaded: true, loading: false, error: action.payload.error }
      }
    case ActivityTypeActionTypes.Delete_Activity_Type:
      {
        return { ...state, loaded: false, loading: true }
      }
    case ActivityTypeActionTypes.Delete_Activity_Type_Success:
      {
        return activityTypeAdapter.removeOne(action.payload.activityType.id, { ...state, loaded: true, loading: false, error: '' });
      }
    case ActivityTypeActionTypes.Delete_Activity_Type_Fail:
      {
        return { ...state, loaded: true, loading: false, error: action.payload.error }
      }

    default:
      return state;
  }
}

export const getActivityTypFeatureState = createFeatureSelector<State>('activitytype');


export const getSelectedActivityTypeId = createSelector(
  getActivityTypFeatureState,
  state=>state.selectedActivityTypeId
);

export const getActivityTypeError = createSelector(
  getActivityTypFeatureState,
  state=>state.error
);

export const getActivityTypeLoaded = createSelector(
  getActivityTypFeatureState,
  state=>state.loaded
);

export const getActivityTypeLoading = createSelector(
  getActivityTypFeatureState,
  state=>state.loading);

  export const getActivityTypeIds = createSelector(
    getActivityTypFeatureState,
    state=>state.loading);


export const {
  selectEntities:getAllActivityTypeEntities,
  selectIds:getAllActivityTypeIds,
  selectAll:getAllActivititeTypes
} = activityTypeAdapter.getSelectors(getActivityTypFeatureState);


export const getSelectedActivityType = createSelector(
  getSelectedActivityTypeId,
  getAllActivityTypeEntities,
  (id,activityTypes) =>id && activityTypes[id]
);
