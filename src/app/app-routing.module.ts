import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {EditComponent} from './product/edit/edit.component';
import {DeleteComponent} from './product/delete/delete.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products/create',
    component: CreateComponent
  },
  {
    path: 'products/:id/edit',
    component: EditComponent
  },
  {
    path: 'products/:id/delete',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
