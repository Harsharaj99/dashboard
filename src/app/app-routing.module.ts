import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'forms',component:FormsComponent},
  {path:'tables',component:TablesComponent},
  {path:'pages',component:PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
