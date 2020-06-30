import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partes-actividades',
  templateUrl: './partes-actividades.component.html',
  styleUrls: ['./partes-actividades.component.scss']
})
export class PartesActividadesComponent implements OnInit {

  empleados = [
    {valor: null, muestraValor: null, gerente: null},
    {valor: 'cquesadag', muestraValor:'Carlos Quesada Galán', gerente: 'Juan Manuel Martinez Ortiz'},
    {valor: 'drodriguezu', muestraValor:'Domingo Rodríguez Urbita', gerente: 'Juan Manuel Martinez Ortiz'},
    {valor: 'jgarciab', muestraValor:'Jesus García Bermejo', gerente: 'Luis Eduardo Rebollo Bretaño'}
  ];

  periodos = [
    {valor: null, muestraValor: null},
    {valor: 3, muestraValor:'abril - 2020'},
    {valor: 4, muestraValor:'mayo - 2020'},
    {valor: 5, muestraValor:'junio - 2020'},
    {valor: 6, muestraValor:'julio - 2020'}
  ];

  @Input() nombre:string;
  periodoSel:number = this.periodos[0].valor;
  empleadoSel:string = this.empleados[0].valor;

  @Output() empleadoEvent = new EventEmitter;
  @Output() periodoEvent = new EventEmitter;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  seleccionEmpleado(){
    this.empleadoEvent.emit(this.empleadoSel.toString());
  }
  
  seleccionPeriodo(){
    this.periodoEvent.emit(this.periodoSel);
  }

  irActividades() {
    this.router.navigateByUrl(
      'partes/actividades/' + this.empleadoSel + '/' + this.periodoSel); 
  }

  irGastos() {
    this.router.navigateByUrl(
      'partes/gastos/' + this.empleadoSel + '/' + this.periodoSel); 
  }

}
