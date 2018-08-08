import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionsComponent } from './sections/sections.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
