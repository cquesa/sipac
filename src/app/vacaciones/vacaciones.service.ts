import { Injectable } from '@angular/core';
import { Vacaciones, DiaVacaciones } from '../vacaciones';
import { VacacionesMes } from '../vacaciones';
import { CalendarioService } from '../calendario.service';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  constructor(private calendarioService: CalendarioService) { }

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

    this.mesVacaciones(ret, "Enero", 0, anio);
    this.mesVacaciones(ret, "Febrero", 1, anio);
    this.mesVacaciones(ret, "Marzo", 2,  anio);
    this.mesVacaciones(ret, "Abril", 3, anio);
    this.mesVacaciones(ret, "Mayo", 4, anio);
    this.mesVacaciones(ret, "Junio", 5, anio);
    this.mesVacaciones(ret, "Julio", 6, anio);
    this.mesVacaciones(ret, "Agosto", 7, anio);
    this.mesVacaciones(ret, "Septiembre", 8, anio);
    this.mesVacaciones(ret, "Octubre", 9, anio);
    this.mesVacaciones(ret, "Noviembre", 10, anio);
    this.mesVacaciones(ret, "Diciembre", 11, anio);

    /* Mis vacaciones disfrutadas
    ret.vacaciones[0].dias[30].check = true;
    ret.vacaciones[0].dias[30].estado = "disfrutado";

    ret.vacaciones[0].dias[30].check = true;
    ret.vacaciones[5].dias[30].estado = "visado";
    */

    return ret;
  }

  private mesVacaciones(empleado: Vacaciones, mes: string, periodo: number, anio: number) {
    let vacacion = new VacacionesMes(mes,
    [new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false),
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false),
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), new DiaVacaciones(false), 
      new DiaVacaciones(false)], 0
    );

    let diasFinde = this.calendarioService.getDiasFinde(periodo, anio);  
  
    for (let i = 0; i < vacacion.dias.length; i++) {
      if (diasFinde.includes(i + 1)) {
        vacacion.dias[i].festivo = true;
      }
    } 

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
