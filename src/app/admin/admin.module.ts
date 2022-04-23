import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsuarioComponent } from './pages/users-panel/form-usuario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListadoComponent,
    UsersPanelComponent,
    AgregarComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
