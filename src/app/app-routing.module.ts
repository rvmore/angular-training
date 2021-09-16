import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'User List'}
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
    data: { title: 'Edit User'}
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
