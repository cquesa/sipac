import { Component, OnInit } from '@angular/core';
import { Vacaciones, VacacionesMes, DiaVacaciones } from '../vacaciones';
import { VacacionesService } from './vacaciones.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.scss']
})
export class VacacionesComponent implements OnInit {

  diaMes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  empleado: Vacaciones = new Vacaciones();
  anioSel: number;
  empleadoSel: string;

  constructor(public router: Router, private loginService: LoginService,
    private vacacionesService: VacacionesService) { }

  ngOnInit(): void {
    let d = new Date();
    this.anioSel = d.getFullYear();
    let usuario = this.loginService.getUsuario();
    this.empleadoSel = usuario.empleado;
    this.empleado = this.vacacionesService.getVacaciones(this.empleadoSel, this.anioSel);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  
  guardar() {
    this.vacacionesService.guardarVacaciones(this.empleadoSel, this.anioSel, this.empleado);
  }

  fromTo(estadoFrom: string, esadoTO: string) {
    for (let vacacion of this.empleado.vacaciones) {
      vacacion.total = 0;
      for (let dia of vacacion.dias) {
        if (dia.check && dia.estado != null && dia.estado.localeCompare(estadoFrom) == 0) {
          dia.estado = esadoTO;
        }
       }
    }
    this.vacacionesService.guardarVacaciones(this.empleadoSel, this.anioSel, this.empleado);
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

  seleccionAnio(evt) {
    console.log('TO DO seleccionAnio', evt);
    this.anioSel = evt;
    this.empleado = this.vacacionesService.getVacaciones(this.empleadoSel, this.anioSel);
  } 
  seleccionEmpleado(evt) {
    console.log('TO DO seleccionEmpleado', evt);
    this.empleadoSel = evt;
    this.empleado = this.vacacionesService.getVacaciones(this.empleadoSel, this.anioSel);
  }

  clickDia(mes: number, dia:number) {
    let diaObj = this.empleado.vacaciones[mes].dias[dia];
    if (diaObj.estado == null) {
      diaObj.estado = 'borrador';
    } else if (diaObj.estado.localeCompare('borrador') == 0) {
      diaObj.estado = null;
    }
    this.calcularTotales();
  }

  calcularTotales() {
    for (let vacacion of this.empleado.vacaciones) {
      vacacion.total = 0;
      for (let dia of vacacion.dias) {
        vacacion.total += dia.check ? 1 : 0;
       }
    }
  }

}
