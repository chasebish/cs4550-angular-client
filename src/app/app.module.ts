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
import { CourseModulesComponent } from './course-modules/course-modules.component';
import { ModuleServiceClient } from './services/module.service.client';
import { ModuleLessonsComponent } from './module-lessons/module-lessons.component';
import { LessonTopicsComponent } from './lesson-topics/lesson-topics.component';
import { LessonServiceClient } from './services/lesson.service.client';
import { TopicServiceClient } from './services/topic.service.client';
import { TopicWidgetsComponent } from './topic-widgets/topic-widgets.component';
import { WidgetServiceClient } from './services/widget.service.client';
import { AdminComponent } from './admin/admin.component';
import { EnrollServiceClient } from './services/enroll.service.client';
import { NavbarComponent } from './navbar/navbar.component';

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
        CourseModulesComponent,
        ModuleLessonsComponent,
        LessonTopicsComponent,
        TopicWidgetsComponent,
        AdminComponent,
        NavbarComponent
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
        EnrollServiceClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
