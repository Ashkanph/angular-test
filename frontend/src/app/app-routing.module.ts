import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent }     from './profile/profile.component';
import { EditProfileComponent }     from './edit-profile/edit-profile.component';
import { LoginComponent }       from './login/login.component';
import { AuthGuard }       from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { 
    path: 'profile', 
    canActivate: [AuthGuard],
    component: ProfileComponent,
    pathMatch: 'full'
  },
  { 
    path: 'editProfile', 
    canActivate: [AuthGuard],
    component: EditProfileComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
