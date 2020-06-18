import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { GastosComponent } from './gastos/gastos.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SelecMesComponent } from './selec-mes/selec-mes.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports:      [ 
    BrowserModule,     
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule, 
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LoginComponent, HomeComponent, ActividadesComponent, GastosComponent, VacacionesComponent, EmpleadosComponent, SelecMesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
