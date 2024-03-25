import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { initializeApp } from "firebase/app";
import { IonicStorageModule } from '@ionic/storage-angular';
import { enterAnimation } from './nav-animations';
import { firebaseConfig } from 'src/firebase_config';

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      navAnimation: enterAnimation
    }),
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
