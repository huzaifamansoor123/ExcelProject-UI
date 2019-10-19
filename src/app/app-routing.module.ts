import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserformComponent } from './userform/userform.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path: 'userManagementform',
    canActivate: [AuthGuard],

    component: UserFormComponent
  },
  {
    path:'user-List',
    canActivate: [AuthGuard],

    component:UserListComponent
  },
  {path:"scearchtable",
  canActivate: [AuthGuard],
  component:ScearchTableComponent},
  { path: 'scearchtable',
  canActivate: [AuthGuard],
  component: ScearchTableComponent },
  { path: 'form',
  canActivate: [AuthGuard],
  component: UserformComponent },
  { path: 'usertable',
  canActivate: [AuthGuard],
  component: UsertableComponent },
  {path:'form/:id',component:UserformComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
