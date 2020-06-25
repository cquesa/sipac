import { Injectable } from '@angular/core';
import { Vacaciones, DiaVacaciones } from '../vacaciones';
import { VacacionesMes } from '../vacaciones';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  constructor() { }

  getVacaciones (empleado: string, anio: number) : Vacaciones {
    let ret: Vacaciones;

    let aux = localStorage.getItem('vacaciones_' + empleado + "-" + anio);
    if (aux  && aux.localeCompare("null") != 0) {
      ret = JSON.parse(aux);
      return ret;
    }

    ret = new Vacaciones();
    ret.empleado = empleado;
    ret.anio = anio;

    ret.diasTotales = 23;
    ret.diasPendientes = 23;
    ret.dias2019 = 2;
    ret.diasTramite = 15;
    ret.diasDisfrutados = 0;
    ret.dias2020 = 23;
    ret.vacaciones = [];

    this.mesVacaciones(ret, "Enero", anio);
    this.mesVacaciones(ret, "Febrero", anio);
    this.mesVacaciones(ret, "Marzo", anio);
    this.mesVacaciones(ret, "Abril", anio);
    this.mesVacaciones(ret, "Mayo", anio);
    this.mesVacaciones(ret, "Junio", anio);
    this.mesVacaciones(ret, "Julio", anio);
    this.mesVacaciones(ret, "Agosto", anio);
    this.mesVacaciones(ret, "Septiembre", anio);
    this.mesVacaciones(ret, "Octubre", anio);
    this.mesVacaciones(ret, "Noviembre", anio);
    this.mesVacaciones(ret, "Diciembre", anio);

    /* Mis vacaciones disfrutadas
    ret.vacaciones[0].dias[30].check = true;
    ret.vacaciones[0].dias[30].estado = "disfrutado";

    ret.vacaciones[0].dias[30].check = true;
    ret.vacaciones[5].dias[30].estado = "visado";
    */

    return ret;
  }

  private mesVacaciones(empleado: Vacaciones, mes: string, anio: number) {
    let vacacion = new VacacionesMes(mes,
    [new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false),
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false),
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false)], 0
    );
    empleado.vacaciones.push(vacacion);
  }

  guardarVacaciones(empleado: string, anio: number, vacaciones: Vacaciones) {
    console.log('Guardando vacaciones de empleado ' + empleado);
    localStorage.setItem('vacaciones_' + empleado + "-" + anio, JSON.stringify(vacaciones));
  }

  enviarVacaciones(empleado: string, anio: number, vacaciones: Vacaciones) {
    console.log('Enviando solicitud de vacaciones de empleado ' + empleado);
    localStorage.setItem('vacaciones_' + empleado + "-" + anio, JSON.stringify(vacaciones));
  }  
}
