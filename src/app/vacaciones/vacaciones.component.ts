import { Component, OnInit } from '@angular/core';
import { Vacaciones } from '../vacaciones';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.scss']
})
export class VacacionesComponent implements OnInit {

  diaMes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  empleado: Empleado = new Empleado();

  constructor() { }

  ngOnInit(): void {
    this.empleado.diasTotales = 23;
    this.empleado.diasPendientes = 23;
    this.empleado.dias2019 = 2;
    this.empleado.diasTramite = 15;
    this.empleado.diasDisfrutados = 0;
    this.empleado.dias2020 = 23;
    this.empleado.vacaciones = [];

    this.mesVacaciones("Enero");
    this.mesVacaciones("Febrero");
    this.mesVacaciones("Marzo");
    this.mesVacaciones("Abril");
    this.mesVacaciones("Mayo");
    this.mesVacaciones("Junio");
    this.mesVacaciones("Julio");
    this.mesVacaciones("Agosto");
    this.mesVacaciones("Septiembre");
    this.mesVacaciones("Octubre");
    this.mesVacaciones("Noviembre");
    this.mesVacaciones("Diciembre");
  }
  mesVacaciones(mes: string) {
    let vacacion = new Vacaciones(mes,
    [false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false, false, false, false, false, false], 0
    );
    this.empleado.vacaciones.push(vacacion);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  
  guardar() {
  }

  enviar() {
  }

  cancelar() {
  }

  seleccionAnio(evt) {
    console.log('TO DO seleccionAnio', evt);
  } 
  seleccionEmpleado(evt) {
    console.log('TO DO seleccionEmpleado', evt);
  }

  calcularTotales() {
    for (let vacacion of this.empleado.vacaciones) {
      vacacion.total = 0;
      for (let dia of vacacion.dias) {
        vacacion.total += dia ? 1 : 0;
       }
    }
  }

}
