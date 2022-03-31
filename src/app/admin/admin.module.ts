import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListadoComponent,
    UsersPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
