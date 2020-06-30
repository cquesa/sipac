import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GastosInterface } from './model/gastosInterface';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  usuario:any = {
    empleado: '', nombre: ''
  };

  urlGetAll = "";
  urlPut = "";
  urlDelete = "";

  nuevoArray:GastosInterface[];

  constructor(private http : HttpClient,
    private datosUser : LoginService) { }

  getGastos(empleado: string, periodo:number) {
    // Llamar url php Get
    this.usuario = this.datosUser.getUsuario();
    let gastos:GastosInterface[];
    //return this.http.get(this.urlGetAll + '/' + this.usuario.empleado + '/' + periodo);

    let aux = localStorage.getItem('gastos_' + empleado + "-" + periodo);
    if (aux  && aux.localeCompare("null") != 0) {
      gastos = JSON.parse(aux);

      for (let x=0; x<gastos.length;x++) {
        gastos[x].rangoFechas[0] = new Date(gastos[x].rangoFechas[0]);
        gastos[x].rangoFechas[1] = new Date(gastos[x].rangoFechas[1]);

        gastos[x].proyecto.idProyecto = gastos[x].proyecto.idProyecto;
        gastos[x].proyecto.dsProyecto = gastos[x].proyecto.dsProyecto;
      }

      return gastos;
    }

    // Un gasto vacío por defecto
    gastos = [
      {
        empleado: empleado,
        periodo: periodo,    
        proyecto : {
          idProyecto: null,
          dsProyecto: ''
        },
        rangoFechas: [new Date(''),new Date('')],
        tipoGasto : {
          idTipoGasto: null,
          dsTipoGasto: ''
        },
        nmUnidades: 0,
        nmImporte: 0,
        nmTotal: 0,
        dsDescripcion: '',
        estado : {
          idEstado: 0,
          dsEstado: 'Borrador'}
      }
    ];

    return gastos;
  }

  guardarGastos(empleado: string, periodo: number, gastos:GastosInterface[]) {
    // Llamar url php Put
    JSON.stringify(gastos);
    //this.http.put(this.urlPut, JSON.stringify(gastos)).subscribe();
    localStorage.setItem('gastos_' + empleado + "-" + periodo, JSON.stringify(gastos));
  }

  borrarGasto(id:number) {
    // Llamar url php Delete
    //this.http.post(this.urlDelete, id).subscribe();
  }


}
