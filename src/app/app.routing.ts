import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseSectionsComponent } from './course-sections/course-sections.component';
import { AdminComponent } from './admin/admin.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/sections', component: CourseSectionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
