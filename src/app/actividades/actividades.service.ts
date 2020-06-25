import { Injectable } from '@angular/core';
import { ParteActividad, Actividad } from '../actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor() { }


  getParteActividad (empleado: string, mes: number) : ParteActividad {
    let ret: ParteActividad;

    let aux = localStorage.getItem('parteActividad_' + empleado + "-" + mes);
    if (aux  && aux.localeCompare("null") != 0) {
      ret = JSON.parse(aux);
      return ret;
    }

    ret = new ParteActividad();
    ret.empleado = empleado;
    ret.mes = mes;
    ret.estado = 'borrador';

    // Una actividad vacía por defecto
    let actividad:  Actividad = new Actividad();
    actividad.horas =
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    ret.actividades.push(actividad); 
    return ret;
  }

  guardarParteActividad(empleado: string, mes: number, parteActividad: ParteActividad) {
    console.log('Guardando parte de actividad de empleado ' + empleado);
    localStorage.setItem('parteActividad_' + empleado + "-" + mes, JSON.stringify(parteActividad));
  }

  enviarParteActividad(empleado: string, mes: number, parteActividad: ParteActividad) {
    console.log('Enviando parte de actividad de empleado ' + empleado);
    localStorage.setItem('parteActividad_' + empleado + "-" + mes, JSON.stringify(parteActividad));
  }  
  
  
}
