import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from "src/app/activity/activity-list/activity-list.component";

const routes: Routes = [
{ path: '', redirectTo: '/activities', pathMatch: 'full' },
{ path: 'activities', component: ActivityListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
