import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { NavComponent } from './nav/nav.component';
import { SingleEventComponent } from './event/single-event/single-event.component';
import { ArchiveEventComponent } from './event/archive-event/archive-event.component';
import { CalendarComponent } from './event/single-event/calendar/calendar.component';
import { RankingComponent } from './event/single-event/ranking/ranking.component';
import { TeamComponent } from './event/single-event/team/team.component';
import { GameCardComponent } from './event/single-event/game-card/game-card.component';
import { BadgeComponent } from './UI/badge/badge.component';
import { PopupSimpleComponent } from './popup-simple/popup-simple.component';
import { AuthService } from './services/auth.service';
import { AddEventComponent } from './event/add-event/add-event.component';

const appRoutes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'event', component: SingleEventComponent },
  { path: 'home', component: ArchiveEventComponent },
  { path: 'auth/forgotPassword', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    AuthenticationComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavComponent,
    SingleEventComponent,
    ArchiveEventComponent,
    CalendarComponent,
    RankingComponent,
    TeamComponent,
    GameCardComponent,
    BadgeComponent,
    PopupSimpleComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
