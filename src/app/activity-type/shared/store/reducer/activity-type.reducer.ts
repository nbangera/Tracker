import { ActivityTypeActions } from './../actions/activity-type.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { ActivityType } from '../../model/activity-type';


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

    default:
      return state;
  }
}
