import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
