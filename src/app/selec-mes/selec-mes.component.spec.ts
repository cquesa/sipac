import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecMesComponent } from './selec-mes.component';

describe('SelecMesComponent', () => {
  let component: SelecMesComponent;
  let fixture: ComponentFixture<SelecMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
