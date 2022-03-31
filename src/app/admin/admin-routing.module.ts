import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'listado',component: ListadoComponent},
      {path: 'users-panel',component: UsersPanelComponent},
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
