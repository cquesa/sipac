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
import { NotaComponent } from './actividades/nota/nota.component';
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
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PartesComponent } from './partes/partes.component';
import { PartesActividadesComponent } from './partes-actividades/partes-actividades.component';
import { SelecAnioComponent } from './vacaciones/selec-anio/selec-anio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule,     
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BsDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    BsDatepickerModule.forRoot() ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LoginComponent, HomeComponent, ActividadesComponent, NotaComponent, GastosComponent, VacacionesComponent, EmpleadosComponent, SelecMesComponent, PartesComponent, PartesActividadesComponent, SelecAnioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
