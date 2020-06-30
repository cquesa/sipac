import { Component, OnInit } from '@angular/core';
import { GastosInterface } from './model/gastosInterface';
import { BsDaterangepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { GastosService } from './gastos.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoginService } from '../login/login.service';


const PROYECTOS = [
  {
    idProyecto : 1,
    dsProyecto : 'CMMA'
  },
  {
    idProyecto : 2,
    dsProyecto : 'Proyecto 1'
  },
  {
    idProyecto : 3,
    dsProyecto : 'Proyecto 2'
  },
  {
    idProyecto : 4,
    dsProyecto : 'Interproyecto'
  },
  
];

const TIPO_GASTO = [
  {
    idTipoGasto: 1,
    dsTipoGasto: 'Transporte'
  },
  {
    idTipoGasto: 2,
    dsTipoGasto: 'Comida'
  },
  {
    idTipoGasto: 3,
    dsTipoGasto: 'Alojamiento'
  },
  {
    idTipoGasto: 4,
    dsTipoGasto: 'Taxi'
  },
  {
    idTipoGasto: 5,
    dsTipoGasto: 'Desayuno'
  }
  
  
];

const GASTOS_EMPLEADO_ABRIL:GastosInterface[]  = [
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    //fcDesde: '01/01/2020',
    //fcHasta: '30/01/2020',
    rangoFechas: [new Date('04/01/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un restaurante',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 4,
      dsProyecto: 'Interproyecto'
    },
    //fcDesde: '27/02/2020',
    //fcHasta: '29/02/2020',
    rangoFechas: [new Date('04/27/2020'), new Date('04/29/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Alojamiento'
    },
    nmUnidades: 1,
    nmImporte: 300.00,
    nmTotal: 300.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 3,
      dsProyecto: 'Proyecto 2'
    },
    //fcDesde: '09/03/2020',
    //fcHasta: '30/03/2020',
    rangoFechas: [new Date('04/09/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Taxi'
    },
    nmUnidades: 20,
    nmImporte: 10.00,
    nmTotal: 200.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 2,
      dsProyecto: 'Proyecto 1'
    },
    //fcDesde: '15/04/2020',
    //fcHasta: '30/03/2020',
    rangoFechas: [new Date('04/15/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Transporte'
    },
    nmUnidades: 10,
    nmImporte: 15.00,
    nmTotal: 150.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }
];

const GASTOS_EMPLEADO_MAYO:GastosInterface[]  = [
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('05/05/2020'), new Date('05/15/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('05/16/2020'), new Date('05/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }  
];

const GASTOS_EMPLEADO_JUNIO:GastosInterface[]  = [
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('06/05/2020'), new Date('06/15/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 2,
      dsProyecto: 'Proyecto 1'
    },
    rangoFechas: [new Date('06/21/2020'), new Date('06/26/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    empleado: "",
    periodo: 0,
    proyecto : {
      idProyecto: 4,
      dsProyecto: 'Interproyecto'
    },
    rangoFechas: [new Date('06/28/2020'), new Date('06/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }
];

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

  GASTOS_EMPLEADO:GastosInterface[] = [];

  bsConfig: Partial<BsDaterangepickerConfig>;
  empleado: string;
  periodo: number;
  
  fechaActual = new Date(); 
  minDate:Date;
  maxDate:Date;
  usuario;
  perfil;
  revisionGerente: boolean = false;
  
  constructor(
    public router: Router, 
    private activatedRoute: ActivatedRoute,
    private localeService: BsLocaleService,
    private gastosService: GastosService,
    private loginService: LoginService) {
    defineLocale('es', esLocale);
    this.localeService.use('es');
  }

  ngOnInit(): void {
    let d = new Date();
    this.usuario = this.loginService.getUsuario();
    this.empleado = this.usuario.empleado;   

    this.perfil = this.loginService.getPerfil();

    this.activatedRoute.paramMap.subscribe(
      (parametros: ParamMap) => {
        let empleado = parametros.get('empleado');
        let periodo = parametros.get('periodo');
        if (empleado) {
          this.empleado = empleado;
          this.revisionGerente = true;
        }
        if (periodo) {
          this.periodo = parseInt(periodo);
        }      
      }
    );

    if (this.periodo == null) {
      this.periodo = this.fechaActual.getMonth();
    }
    this.minDate = new Date(this.fechaActual.getFullYear(), this.periodo, 1); 
    this.maxDate = new Date(this.fechaActual.getFullYear(), this.periodo+1, 0);

    this.bsConfig = Object.assign({}, 
      { isAnimated: true },
      { adaptivePosition: true },
      { containerClass: 'theme-default' },
      { showWeekNumbers: false },
      { minDate: this.minDate},
      { maxDate: this.maxDate},
      { displayOneMonthRange: true},
      { displayMonths: 1}
      );
    
    this.GASTOS_EMPLEADO = this.gastosService.getGastos(this.empleado, this.periodo);
    this.router.url;
    }

  seleccionPeriodo(evt) {
    this.periodo = evt;
    this.bsConfig.minDate = new Date(this.fechaActual.getFullYear(), this.periodo , 1); 
    this.bsConfig.maxDate = new Date(this.fechaActual.getFullYear(), this.periodo+1, 0);
    this.GASTOS_EMPLEADO = this.gastosService.getGastos(this.empleado, this.periodo);         
  }

  getProyectos() {
    return PROYECTOS;
  }

  getTipoGasto() {
    return TIPO_GASTO;
  }

  compararProyectos(objeto1, objeto2) {
    if (objeto1==null || objeto2==null) {
      return false;
    }
    if (objeto1.idProyecto===objeto2.idProyecto) {
      return objeto1.dsProyecto===objeto2.dsProyecto;
    }    
  }

  compararTiposGasto(objeto1, objeto2) {
    if (objeto1==null || objeto2==null) {
      return false;
    }
    if (objeto1.idTipoGasto===objeto2.idTipoGasto) {
      return objeto1.dsTipoGasto===objeto2.dsTipoGasto;
    }    
  }

  annadir() {
    let gasto:GastosInterface;
    
    gasto = {
      empleado: this.empleado,
      periodo: this.periodo,    
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

    this.GASTOS_EMPLEADO.push(gasto); 
  }

  fromTo(estadoFrom:number, estadoTO:number, dsEstadoTO:string) {
    for (let gasto of this.GASTOS_EMPLEADO) {
      if (gasto.estado.idEstado == estadoFrom) {
        gasto.estado.idEstado = estadoTO;
        gasto.estado.dsEstado = dsEstadoTO;
      }

    }
    this.gastosService.guardarGastos(this.empleado, this.periodo, this.GASTOS_EMPLEADO);
  }

  borrar(i:number) {
    // Hacer llamada al backend para borrar el gasto con índice i
    this.GASTOS_EMPLEADO.splice(i, 1);
    this.gastosService.borrarGasto(i);    
  }

  guardar() {
    // Hacer llamada al backend para guardar los gastos
    this.fromTo(3, 0, 'Borrador');
    if (this.validaCampos()) {
      this.gastosService.guardarGastos(this.empleado, this.periodo, this.GASTOS_EMPLEADO);
    }
  }

  validaCampos() {
    for (let x = 0; x < this.GASTOS_EMPLEADO.length; x++) {
      if (this.GASTOS_EMPLEADO[x].proyecto.idProyecto == null ||
        this.GASTOS_EMPLEADO[x].rangoFechas[0] == null ||
        this.GASTOS_EMPLEADO[x].rangoFechas[1] == null ||
        this.GASTOS_EMPLEADO[x].tipoGasto.idTipoGasto == null ||
        this.GASTOS_EMPLEADO[x].nmTotal == 0) {
          alert('Datos incompletos. Por favor, informe todos los campos.')
          return false;
        }
    }
    
    return true;
  }
  enviar() {
    this.fromTo(0, 1, 'Enviado');
    if (this.validaCampos()) {
      this.gastosService.guardarGastos(this.empleado, this.periodo, this.GASTOS_EMPLEADO);
    }
  }

  visar() {
    this.fromTo(1, 2, 'Visado');
    this.gastosService.guardarGastos(this.empleado, this.periodo, this.GASTOS_EMPLEADO);
  }

  rechazar() {
    this.fromTo(1, 3, 'Rechazado');
    this.gastosService.guardarGastos(this.empleado, this.periodo, this.GASTOS_EMPLEADO);
  }

  cancelar() {
  }

  imprimir() {

  }

  actualizaTotal(index:number) {
    this.GASTOS_EMPLEADO[index].nmTotal = this.GASTOS_EMPLEADO[index].nmUnidades * this.GASTOS_EMPLEADO[index].nmImporte;
  }

}