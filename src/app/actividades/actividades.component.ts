import { Component, OnInit } from '@angular/core';
import { Actividad, ParteActividad } from '../actividad';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotaComponent } from './nota/nota.component';

import { ActividadesService } from './actividades.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  // Empleado y periodo
  empleado: string;
  periodo: number;
  revisionGerente: boolean = false;

  diaMes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

  parteActividad: ParteActividad;

  totales: number[] = [];
  total: number;

  proyectos: string[] = ["GO G2437", "GO G2421"];
  conceptos: string[] = ["Gestión Adm. Digital", "Vacaciones"];

  constructor(public router: Router, private loginService: LoginService, 
    private actividadesService: ActividadesService,
    private activatedRoute: ActivatedRoute, public dialog: MatDialog) { 
        // valores por defecto
        let d = new Date();
        this.periodo = d.getMonth() + 1;
        let usuario = this.loginService.getUsuario();
        this.empleado = usuario.empleado;
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parametros: ParamMap) => {
        // recogemos parametros si hay
        let empleado = parametros.get('empleado');
        let periodo = parametros.get('periodo');
        if (empleado) {
          this.empleado = empleado;
          this.revisionGerente = true;
        }
        if (periodo) {
          this.periodo = parseInt(periodo);
        }      
        this.parteActividad = this.actividadesService.getParteActividad(this.empleado, this.periodo);
        this.calcularTotales();
      });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  annadir() {
    let actividad:  Actividad = new Actividad();
    actividad.horas =
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.parteActividad.actividades.push(actividad); 
  }

  borrar(i) {
    if (this.parteActividad.estado == 'visado' 
      || this.parteActividad.estado == 'enviado' 
      || this.parteActividad.estado == 'disfrutado'  
      || this.revisionGerente) {
        return;
    }

    this.parteActividad.actividades.splice(i, 1);
    this.calcularTotales();
  }

  
  guardar() {
    this.actividadesService.guardarParteActividad(this.empleado, this.periodo, this.parteActividad);
  }

  fromTo(estadoFrom: string, esadoTO: string) {
    if (this.parteActividad.estado != null && this.parteActividad.estado.localeCompare(estadoFrom) == 0) {
      this.parteActividad.estado = esadoTO;
    }
    this.actividadesService.guardarParteActividad(this.empleado, this.periodo, this.parteActividad);
  }

  enviar() {
    // Pasamos "borrador" a "enviado"
    this.fromTo('borrador','enviado' );
  }

  aceptar() {
    this.fromTo('enviado','visado' );
  }

  rechazar() {
    this.fromTo('enviado','rechazado' );
  }

  cancelar() {
  }
  calcularTotales() {
    this.total = 0;
    this.totales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let actividad of this.parteActividad.actividades) {
      for(var i = 0; i < actividad.horas.length; i++){
        this.total += actividad.horas[i];
        this.totales[i] += actividad.horas[i];
       }
    }
  }

  seleccionPeriodo(evt) {
    console.log('TO DO seleccionPeriodo', evt);
    this.periodo = evt;
    this.parteActividad = this.actividadesService.getParteActividad(this.empleado, this.periodo);
    this.calcularTotales();
  }    
 
  open(actividad: Actividad, indice: number) {
    const dialogRef = this.dialog.open(NotaComponent, {
      width: '250px',
      data: {actividad: actividad, indice: indice, 
        dia: indice + "06/2020",
      horas: actividad.horas[indice], observaciones: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if (result) {
        actividad.horas[indice] = result.horas;
      }
    });    
  }  
}
