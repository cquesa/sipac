import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotaComponent } from './nota/nota.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  // Empleado y periodo
  empleado: string;
  periodo: number;

  diaMes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

  actividades: Actividad[] = [];

  totales: number[] = [];
  total: number;

  proyectos: string[] = ["GO G2437", "GO G2421"];
  conceptos: string[] = ["Gestión Adm. Digital", "Vacaciones"];

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parametros: ParamMap) => {
        let empleado = parametros.get('empleado');
        let periodo = parametros.get('periodo');
        if (empleado) {
          this.empleado = empleado;
        }
        if (periodo) {
          this.periodo = parseInt(periodo);
        }      }
    );

    let actividad:  Actividad;

    actividad = new Actividad('GO G2437', 'Gestión Adm. Digital',
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8]);

    this.actividades.push(actividad);

    actividad = new Actividad('GO G2437', 'Vacaciones',
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    this.actividades.push(actividad);

    this.calcularTotales();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  annadir() {
    let actividad:  Actividad;
    actividad = new Actividad(null, null,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    this.actividades.push(actividad); 
  }

  borrar(i) {
    this.actividades.splice(i, 1);
    this.calcularTotales();
  }

  guardar() {
  }

  enviar() {
  }

  cancelar() {
  }

  calcularTotales() {
    this.total = 0;
    this.totales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let actividad of this.actividades) {
      for(var i = 0; i < actividad.horas.length; i++){
        this.total += actividad.horas[i];
        this.totales[i] += actividad.horas[i];
       }
    }
  }

  seleccionPeriodo(evt) {
    console.log('TO DO seleccionPeriodo', evt);
  }    
 
  open(actividad: Actividad, indice: number) {
    const dialogRef = this.dialog.open(NotaComponent, {
      width: '250px',
      data: {actividad: actividad, indice: indice, 
        dia: indice + "06/2020",
      horas: actividad.horas[indice], observaciones: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if (result) {
        actividad.horas[indice] = result.horas;
      }
    });    
  }  
}
