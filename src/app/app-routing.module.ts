import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path: 'userform',
    component: UserFormComponent
  },
  {
    path:'user-List',
    component:UserListComponent
  },
  {path:"scearchtable",component:ScearchTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
