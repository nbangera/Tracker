import { AngularFirestore } from '@angular/fire/firestore';
import { ActivityEffects } from './activity/shared/store/effects/activity.effects';
import { ActivityModule } from './activity/activity.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ActivityModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ActivityEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
