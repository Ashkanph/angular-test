import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent }     from './profile/profile.component';
import { LoginComponent }       from './login/login.component';

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
    component: ProfileComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { 
      enableTracing: true,
      useHash: false  
    } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
