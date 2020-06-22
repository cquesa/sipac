import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesActividadesComponent } from './partes-actividades.component';

describe('PartesActividadesComponent', () => {
  let component: PartesActividadesComponent;
  let fixture: ComponentFixture<PartesActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartesActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartesActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
