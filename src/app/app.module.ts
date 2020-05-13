import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { HeaderComponent } from './header/header.component';
import * as firebase from 'firebase/app';
import { environment } from "src/environments/environment";
import { HttpClientModule } from "@angular/common/http";

firebase.initializeApp( environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
