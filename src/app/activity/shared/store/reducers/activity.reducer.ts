import { UpdateActivityFail } from './../actions/activity.actions';

import { Activity } from "./../../model/activity";
import { Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import {
  ActivityActions,
  ActivityActionTypes
} from "../actions/activity.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends EntityState<Activity> {
  selectedActivityId: string | null;
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const activityAdapter: EntityAdapter<Activity> = createEntityAdapter<
  Activity
>();

export const defaultActivity = {
  ids: [],
  entities: [],
  selectedActivityId: "",
  loaded: false,
  loading: false,
  error: ""
};

export const initialState = activityAdapter.getInitialState(defaultActivity);

export function reducer(state = initialState, action: ActivityActions): State {
  switch (action.type) {
    case ActivityActionTypes.Load_Activities: {
      return { ...state, loading: true, loaded: false };
    }
    case ActivityActionTypes.Load_Activities_Success: {
      return activityAdapter.addAll(action.payload.activities, {
        ...state,
        loaded: true,
        loading: false
      });
    }
    case ActivityActionTypes.Load_Activities_Fail: {
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload.error
      };
    }
    case ActivityActionTypes.Fetch_Activity:{
      return{
        ...state,
        loading : true,
        loaded :false,
        selectedActivityId:action.payload.activityId
      }
    }
    // case ActivityActionTypes.Fetch_Activity_Success:{
    //   return{
    //     ...state,
    //     loaded:true,
    //     loa
    //   }
    // }

    case ActivityActionTypes.Add_Activity: {
      //just updating loading and loaded state
      return { ...state, loading: false, loaded: true };
    }
    case ActivityActionTypes.Add_Activity_Success: {
      return activityAdapter.addOne(action.payload.activity, {
        ...state,
        loaded: false,
        loading: true
      });
    }
    case ActivityActionTypes.Add_Activity_Fail: {
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload.error
      };
    }

    case ActivityActionTypes.Update_Activity_Success:{

      return activityAdapter.updateOne(action.payload.activity,{
        ...state,
        loaded:true,
        loading:false
      })
    }

    case ActivityActionTypes.Update_Activity:{
      return {
        ...state,
        loading:true,
        loaded:false
      }
    }

    case ActivityActionTypes.Update_Activity_Fail:{
      return {
        ...state,
        loaded:true,
        loading:false,
        error:action.payload.error
      }
    }

    default:
      return state;
  }
}

export const getActivityFeatureState = createFeatureSelector<State>("activities");

export const getSelectedActivityId = createSelector(
  getActivityFeatureState,
  state => state.selectedActivityId
);

export const getActivityLoaded = createSelector(
  getActivityFeatureState,
  state=>state.loaded
);

export const getActivityLoading = createSelector(
  getActivityFeatureState,
  state=>state.loading
);

export const getActivityError = createSelector(
  getActivityFeatureState,
  state=>state.error
);

export const {
  selectAll: getAllActivities,
  selectEntities: getActivities
} = activityAdapter.getSelectors(getActivityFeatureState);

export const getSelectedActivity = createSelector(
  getActivities,
  getSelectedActivityId,
  (entities, id) => id && entities[id]
);

//export const getActivityIds = (state:State)=>state.ids;
//export const getActivities = (state:State)=>state.entities;
//export const getSelectedActivity = (state:State)=>state.selectedActivityId;
