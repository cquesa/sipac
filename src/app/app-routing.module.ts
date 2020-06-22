import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { GastosComponent } from './gastos/gastos.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PartesComponent } from './partes/partes.component';
import { PartesActividadesComponent } from './partes-actividades/partes-actividades.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'partes', component: PartesComponent,
    children: [  
      { path: 'actividades', component: ActividadesComponent },
      { path: 'gastos', component: GastosComponent },
      { path: 'vacaciones', component: VacacionesComponent },
  ]},
  { path: 'empleados', component: EmpleadosComponent ,
    children: [  
      { path: 'partesActividades', component: PartesActividadesComponent },
      { path: 'solicitudVacaciones', component: VacacionesComponent }
  ]},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
