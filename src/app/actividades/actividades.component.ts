import { Component, OnInit } from '@angular/core';
import { Actividad, ParteActividad } from '../actividad';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotaComponent } from './nota/nota.component';

import { ActividadesService } from './actividades.service';
import { LoginService } from '../login/login.service';
import { CalendarioService } from '../calendario.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  // Empleado y periodo
  empleado: string;
  periodo: number;
  anyo: number;  
  revisionGerente: boolean = false;

  diaMes = [];
  diasFinde = [];

  parteActividad: ParteActividad;

  totales: number[] = [];
  total: number;

  proyectos: string[] = ["GO G2437", "GO G2421"];
  conceptos: string[] = ["Gestión Adm. Digital", "Vacaciones"];

  constructor(public router: Router, private loginService: LoginService, 
    private actividadesService: ActividadesService,
    private calendarioService: CalendarioService,
    private activatedRoute: ActivatedRoute, public dialog: MatDialog) { 
        // valores por defecto
        let d = new Date();
        this.periodo = d.getMonth();
        this.anyo = d.getFullYear();
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
        this.parteActividad = this.actividadesService.getParteActividad(this.empleado, this.periodo, this.anyo);
        this.calcularTotales();
      });
      this.diaMes = this.calendarioService.getDiasMes(this.periodo, this.anyo);
      this.diasFinde = this.calendarioService.getDiasFinde(this.periodo, this.anyo);  
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  annadir() {
    let actividad:  Actividad = new Actividad();

    actividad.horas = this.calendarioService.getMes(this.periodo, this.anyo);

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

  fromTo(estadoFrom: string, estadoTO: string) {
    if (this.parteActividad.estado != null && this.parteActividad.estado.localeCompare(estadoFrom) == 0) {
      this.parteActividad.estado = estadoTO;
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

    this.totales = this.calendarioService.getMes(this.periodo, this.anyo);

    for (let actividad of this.parteActividad.actividades) {
      for(var i = 0; i < actividad.horas.length; i++){
        this.total += actividad.horas[i];
        this.totales[i] += actividad.horas[i];
       }
    }
  }

  seleccionPeriodo(evt) {
    console.log('TO DO seleccionPeriodo', evt);
     //el usuario puede haber seleccionado un mes distinto al mes actual
    //Se comprueba si el mes es o del aÃ±o en curso o del anterior o posterior
    if(evt==-1){
      this.anyo = this.anyo - 1;
      this.periodo = 11;
    }else{
      if(evt==12){
        this.anyo = this.anyo + 1;
        this.periodo = 0;
      }else{
        this.periodo = evt;
      }
    }
    
    this.diaMes = this.calendarioService.getDiasMes(this.periodo, this.anyo);
    this.diasFinde = this.calendarioService.getDiasFinde(this.periodo, this.anyo);
    
    this.parteActividad = this.actividadesService.getParteActividad(this.empleado, this.periodo, this.anyo);
    this.calcularTotales();
  }    
 
  open(actividad: Actividad, indice: number) {
    const dialogRef = this.dialog.open(NotaComponent, {
      width: '250px',
      data: {actividad: actividad, indice: indice, 
     //dia: indice + "06/2020",
      dia: (indice + 1) + "/" + (this.periodo + 1) + "/" + this.anyo,
      horas: actividad.horas[indice], observaciones: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if (result) {
        actividad.horas[indice] = result.horas;
      }
    });    
  }  

  getBackgroundColor(numero:number){
    var esFinde:boolean = false;
    var color:string;

    for (var i=0; i<this.diasFinde.length; i++){
      if (this.diasFinde[i] == this.diaMes[numero]){
        esFinde = true;
      }
    }

    if(esFinde){
      color = 'yellow';
    }

    return color; 

  }

}
