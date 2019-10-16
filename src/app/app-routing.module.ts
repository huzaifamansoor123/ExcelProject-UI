import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';


const routes: Routes = [
  {path:"scearchtable",component:ScearchTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
