import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import CourseServiceClient from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
