import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseSectionsComponent } from './course-sections/course-sections.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'course', component: CourseNavigatorComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: 'course/:courseId/sections', component: CourseSectionsComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
