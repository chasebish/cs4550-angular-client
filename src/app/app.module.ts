import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import CourseServiceClient from './services/course.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
