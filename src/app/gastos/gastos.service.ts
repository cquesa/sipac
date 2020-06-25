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
  urlGetPut = "";
  urlPost = "";
  urlDelete = "";
  urlEnviar = "";

  constructor(private http : HttpClient,
    private datosUser : LoginService) { }

  getAll(periodo:number) {
    // Llamar url php Get
    this.usuario = this.datosUser.getUsuario();
    let elementos:GastosInterface[];
    //return this.http.get(this.urlGetAll + '/' + this.usuario.empleado + '/' + periodo);
    return elementos;
  }

  guardarGastos(gastos:GastosInterface[]) {
    // Llamar url php Put
    JSON.stringify(gastos);
    //this.http.put(this.urlGetPut, JSON.stringify(gastos)).subscribe();
    //localStorage.setItem("GASTOS_EMPLEADO", JSON.stringify(gastos));
  }

  updateGasto(id:number) {
    // Llamar url php Post
    //this.http.post(this.urlPost, id).subscribe();
  }

  borrarGasto(id:number) {
    // Llamar url php Delete
    //this.http.post(this.urlDelete, id).subscribe();
  }

  enviarGastos(gastos:GastosInterface[]) {
    // Llamar url php Delete
    //this.http.post(this.urlEnviar, gastos).subscribe();
  }


}
