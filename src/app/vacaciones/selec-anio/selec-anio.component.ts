import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-anio',
  templateUrl: './selec-anio.component.html',
  styleUrls: ['./selec-anio.component.scss']
})
export class SelecAnioComponent implements OnInit {
  empleados = [
    {valor: null, muestraValor: null, gerente: null},  
    {valor: 'cquesadag', muestraValor:'Carlos Quesada Galán', gerente: 'Juan Manuel Martinez Ortiz'},
    {valor: 'drodriguezu', muestraValor:'Domingo Rodríguez Urbita', gerente: 'Juan Manuel Martinez Ortiz'},
    {valor: 'jgarciab', muestraValor:'Jesus García Bermejo', gerente: 'Luis Eduardo Rebollo Bretaño'}
  ];
  empleadoSel:string = this.empleados[1].valor;
  @Output() empleadoEvent = new EventEmitter;

  anios = [
    {valor: 2020, muestraValor:'2020'},
    {valor: 2019, muestraValor:'2019'},
    {valor: 2018, muestraValor:'2018'},
    {valor: 2017, muestraValor:'2017'},
    {valor: 2016, muestraValor:'2016'}
  ];

  @Input() titulo:string;
  @Input() empleado:string;
  @Input() anio:number;

  anioSel:number = this.anios[0].valor;;
  nombre: string;
  gerente: string;
  @Output() anioEvent = new EventEmitter;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('router.url: ' + this.router.url);
    this.nombre = 'Domingo Rodríguez Urbita';
    this.gerente = 'Juan Manuel Martinez Ortiz';
    if (this.empleado) {
      for (let aux of this.empleados) {
        if (aux.valor == this.empleado) {
          this.nombre = aux.muestraValor;
          this.gerente = aux.gerente;
          break;
        }
      }
    }
    if (this.anio) {
      this.anioSel = this.anio;
    }
  }
  seleccionEmpleado(){
    this.empleadoEvent.emit(this.empleadoSel.toString());
    for (let aux of this.empleados) {
      if (aux.valor == this.empleadoSel) {
        this.gerente = aux.gerente;
        break;
      }
    }
}
  seleccionAnio(){
    this.anioEvent.emit(this.anioSel);
  }
}
