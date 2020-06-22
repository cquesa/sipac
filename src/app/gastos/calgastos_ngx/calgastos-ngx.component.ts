import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';

@Component({
    selector: 'app-calgastos-ngx',
    templateUrl: './calgastos-ngx.component.html',
    styleUrls: ['./calgastos-ngx.component.scss']
})
export class CalgastosNgxComponent implements OnInit {

  bsRangeValue: Date[];
  minDate = new Date('06/01/2020');
  maxDate = new Date('06/30/2020');
  bsConfig: Partial<BsDaterangepickerConfig>;

  @Input() fcDesde: string = "";
  @Input() fcHasta: string = "";
  
  constructor(
    private localeService: BsLocaleService) {

    defineLocale('es', esLocale);
    this.localeService.use('es');

  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, 
      { isAnimated: true },
      { adaptivePosition: true },
      { containerClass: 'theme-default' },
      { showWeekNumbers: false },
      { minDate: this.minDate},
      { maxDate: this.maxDate},
      { rangeInputFormat: 'DD/MM/YYYY' }
    );                                       

    //fecha = fecha.split('-').reverse().join('/');
    this.fcDesde = this.fcDesde.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/g,'$2/$1/$3');
    this.fcHasta = this.fcHasta.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/g,'$2/$1/$3');
    
    this.bsRangeValue = [new Date(this.fcDesde), new Date(this.fcHasta)];

  }

}
