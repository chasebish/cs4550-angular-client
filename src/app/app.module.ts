import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseServiceClient } from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserServiceClient } from './services/user.service.client';
import { SectionsComponent } from './sections/sections.component';
import { SectionServiceClient } from './services/section.service.client';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    EnrollmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    SectionServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
