import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';
import {environment} from '../environments/environment';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
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
