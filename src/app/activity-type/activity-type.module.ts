import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StoreModule } from '@ngrx/store';
import * as fromState from './shared/store';
import * as fromActivityType from './shared/store/reducer/activity-type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivityTypeEffects } from './shared/store/effects/activity-type.effects';
import { ActivityTypeListComponent } from './activity-type-list/activity-type-list.component';
import { ActivityTypeCreateComponent } from './activity-type-create/activity-type-create.component';
import { ActivityTypeUpdateComponent } from './activity-type-update/activity-type-update.component';
import { ActivityTypeDeleteComponent } from './activity-type-delete/activity-type-delete.component';
import { ActivityTypeDetailComponent } from './activity-type-detail/activity-type-detail.component';

@NgModule({
  declarations: [ActivityTypeListComponent, ActivityTypeCreateComponent, ActivityTypeUpdateComponent, ActivityTypeDeleteComponent, ActivityTypeDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('activityType', fromActivityType.reducer),
    EffectsModule.forFeature([ActivityTypeEffects]),

  ]
})
export class ActivityTypeModule { }
