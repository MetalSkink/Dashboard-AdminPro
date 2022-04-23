import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

import { ProdGuardGuard as guard } from "../guards/prod-guard.guard";
import { FormUsuarioComponent } from './pages/users-panel/form-usuario.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'listado',component: ListadoComponent, canActivate:[guard], data: {expectedRole: ['user','moderator','admin']}},
      {path: 'users-panel',component: UsersPanelComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
      {path: 'user-form',component: FormUsuarioComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
      {path: 'agregar',component: AgregarComponent, canActivate:[guard], data: {expectedRole: ['moderator','admin']}},
      {path: 'modificar/:id',component: AgregarComponent, canActivate:[guard], data: {expectedRole: ['moderator','admin']}},
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
