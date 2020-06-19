import {Component, OnInit, Input } from '@angular/core';
import { BsLocaleService, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
    selector: 'app-calgastos-ngx',
    templateUrl: './calgastos-ngx.component.html',
    styleUrls: ['./calgastos-ngx.component.scss']
})
export class CalgastosNgxComponent implements OnInit  {

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  locale = 'bg';
  locales = listLocales();

  @Input() fcDesde:string;
  @Input() fcHasta:string;
  bsConfig: Partial<BsDaterangepickerConfig>;
  constructor(
    private localeService: BsLocaleService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.locales;
  }

    ngOnInit() {
      //this.localeService.use(this.locale);

      this.bsConfig = Object.assign({}, { isAnimated: true }, 
                                        { adaptivePosition: true }, 
                                        { containerClass: 'theme-default' },
                                        { dateInputFormat: 'YYYY-MM-DD' }
                                        );
  }

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}
