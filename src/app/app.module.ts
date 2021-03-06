import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Autosize} from '../components/autosize/autosize';

import { LoginPage } from './../pages/login/login';

import { HomePage } from '../pages/home/home';

//Bulletin Page
import { BulletinPage } from './../pages/bulletin/bulletin';
import { ViewFacultyPage } from './../pages/view-faculty/view-faculty';

//Event Pages
import { EventManagementPage } from './../pages/event-management/event-management';
import { ViewEventPage } from './../pages/view-event/view-event';

import { ChatPage } from './../pages/chat/chat';

//Game Pages
import { GameManagementPage } from './../pages/game-management/game-management';
import { ViewGamePage } from './../pages/view-game/view-game';

import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

//RESTAPI
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    BulletinPage,
    ViewFacultyPage,
    EventManagementPage,
    ViewEventPage,
    GameManagementPage,
    ViewGamePage,
    ChatPage,
    Autosize
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    BulletinPage,
    ViewFacultyPage,
    EventManagementPage,
    ViewEventPage,
    GameManagementPage,
    ViewGamePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    RestApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
