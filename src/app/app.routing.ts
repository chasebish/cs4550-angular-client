import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
