import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {DashboardComponent} from "./dashboard.component";
import {InicioComponent} from "./inicio/inicio.component";
import {UsersComponent} from "./users/users.component";
import {ReportsComponent} from "./reports/reports.component";
import {CreateUserComponent} from "./users/create-user/create-user.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', component: InicioComponent },
      {path: 'users', component: UsersComponent },
      {path: 'reports', component: ReportsComponent },
      {path: 'create-user', component: CreateUserComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
