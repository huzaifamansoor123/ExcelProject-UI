import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';
import { UserformComponent } from './userform/userform.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [
  { path: 'scearchtable', component: ScearchTableComponent },
  { path: 'form', component: UserformComponent },
  { path: 'usertable', component: UsertableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
