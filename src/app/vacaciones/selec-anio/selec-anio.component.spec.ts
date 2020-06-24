import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecAnioComponent } from './selec-anio.component';

describe('SelecAnioComponent', () => {
  let component: SelecAnioComponent;
  let fixture: ComponentFixture<SelecAnioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecAnioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
