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
import { AppGuard } from './guards/app.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ 
  { path: '', component: HomeComponent, canActivate: [AppGuard] },
  { path: 'login', component: LoginComponent , canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent , canActivate: [AppGuard]},
  { path: 'partes', component: PartesComponent, canActivate: [AppGuard],
    children: [  
      { path: 'actividades', component: ActividadesComponent, canActivate: [AppGuard] },
      { path: 'actividades/:empleado/:periodo', component: ActividadesComponent, canActivate: [AppGuard] },
      { path: 'gastos', component: GastosComponent, canActivate: [AppGuard] },
      { path: 'gastos/:empleado/:periodo', component: GastosComponent, canActivate: [AppGuard] },
      { path: 'vacaciones', component: VacacionesComponent, canActivate: [AppGuard] },
  ]},
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AppGuard] ,
    children: [  
      { path: 'partesActividades', component: PartesActividadesComponent, canActivate: [AppGuard] },
      { path: 'solicitudVacaciones', component: VacacionesComponent, canActivate: [AppGuard] }
  ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
