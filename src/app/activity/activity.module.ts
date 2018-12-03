import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityUpdateComponent } from './activity-update/activity-update.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromActivity from './shared/store/reducers/activity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from './shared/store/effects/activity.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActivityListComponent, ActivityCreateComponent, ActivityUpdateComponent, ActivityDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('activities', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects])
  ]
})
export class ActivityModule { }
