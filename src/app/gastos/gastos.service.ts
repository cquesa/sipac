import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GastosInterface } from './model/gastosInterface';

@Injectable({
  providedIn: 'root'
})
export class GastosService {


  urlGetAll = "";
  urlGetPut = "";
  urlPost = "";
  urlGetDelete = "";

  constructor(private http : HttpClient) { }

  getAll() {
    // Llamar url php Get
  }

  onSave(gasto:JSON) {
    // Llamar url php Put
  }

  onUpdate(id:number) {
    // Llamar url php Post
  }

  onDelete(id:number) {
    // Llamar url php Delete
  }

  onEnviar(gastos:GastosInterface[]) {
    // Llamar url php Delete
  }


}
