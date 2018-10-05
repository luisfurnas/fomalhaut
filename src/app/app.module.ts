import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';
import {firebaseConf} from '../environments/api-keys';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConf),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
