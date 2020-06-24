import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selec-mes',
  templateUrl: './selec-mes.component.html',
  styleUrls: ['./selec-mes.component.scss']
})
export class SelecMesComponent implements OnInit {
  empleados = [
    {valor: 'cquesadag', muestraValor:'Carlos Quesada Galán'},
    {valor: 'drodriguezu', muestraValor:'Domingo Rodríguez Urbita'},
    {valor: 'jgarciab', muestraValor:'Jesus García Bermejo'}
  ];

  periodos = [
    {valor: 4, muestraValor:'abril - 2020'},
    {valor: 5, muestraValor:'mayo - 2020'},
    {valor: 6, muestraValor:'junio - 2020'},
    {valor: 7, muestraValor:'julio - 2020'}
  ];

  @Input() titulo:string;
  @Input() empleado:string;
  @Input() periodo:number;

  periodoSel:number = this.periodos[0].valor;;
  nombre: string;
  @Output() periodoEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.nombre = 'Domingo Rodríguez Urbita';
    if (this.empleado) {
      for (let aux of this.empleados) {
        if (aux.valor == this.empleado) {
          this.nombre = aux.muestraValor;
          break;
        }
      }
    }
    if (this.periodo) {
      this.periodoSel = this.periodo;
    }
  }

  seleccionPeriodo(){
    this.periodoEvent.emit(this.periodoSel);
  }
  
}
