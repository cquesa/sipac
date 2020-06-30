import { Injectable } from '@angular/core';
import { ParteActividad, Actividad } from '../actividad';
import { CalendarioService } from '../calendario.service';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private calendarioService: CalendarioService) { }


  getParteActividad (empleado: string, mes: number, anio: number) : ParteActividad {
    let ret: ParteActividad;

    let aux = localStorage.getItem('parteActividad_' + empleado + "-" + mes);
    if (aux  && aux.localeCompare("null") != 0) {
      ret = JSON.parse(aux);
      return ret;
    }

    ret = new ParteActividad();
    ret.empleado = empleado;
    ret.mes = mes;
    ret.anio = anio;
    ret.estado = 'borrador';

    // Una actividad vacía por defecto
    let actividad:  Actividad = new Actividad();

    actividad.horas = this.calendarioService.getMes(mes, anio);

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
