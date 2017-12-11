import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user', children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      },
      {
        path: 'list', component: UserListComponent, children: [
          {
            path: 'user/:name', component: UserComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
