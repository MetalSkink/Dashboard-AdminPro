import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';

import { ProdGuardGuard as guard } from "../guards/prod-guard.guard";
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'listado',component: ListadoComponent},
      {path: 'users-panel',component: UsersPanelComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
      {path: '**',redirectTo: 'listado'}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
