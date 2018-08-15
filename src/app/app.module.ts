import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseServiceClient } from './services/course.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserServiceClient } from './services/user.service.client';
import { SectionServiceClient } from './services/section.service.client';
import { HomeComponent } from './home/home.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseSectionsComponent } from './course-sections/course-sections.component';
import { ModuleServiceClient } from './services/module.service.client';
import { LessonServiceClient } from './services/lesson.service.client';
import { TopicServiceClient } from './services/topic.service.client';
import { WidgetServiceClient } from './services/widget.service.client';
import { AdminComponent } from './admin/admin.component';
import { EnrollServiceClient } from './services/enroll.service.client';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuestionServiceClient } from './services/question.service.client';
import { SubmissionServiceClient } from './services/submission.service.client';

@NgModule({
    declarations: [
        AppComponent,
        WhiteboardComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent,
        CourseViewerComponent,
        CourseSectionsComponent,
        AdminComponent,
        NavbarComponent,
        QuizComponent,
        QuizTakerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        routing
    ],
    providers: [
        CourseServiceClient,
        ModuleServiceClient,
        LessonServiceClient,
        TopicServiceClient,
        WidgetServiceClient,
        SectionServiceClient,
        UserServiceClient,
        EnrollServiceClient,
        QuizServiceClient,
        QuestionServiceClient,
        SubmissionServiceClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
