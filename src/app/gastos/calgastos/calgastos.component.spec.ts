import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalGastosComponent } from './calgastos.component';

describe('CalgastosComponent', () => {
  let component: CalGastosComponent;
  let fixture: ComponentFixture<CalGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
