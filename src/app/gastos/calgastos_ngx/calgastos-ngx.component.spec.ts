import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgastosNgxComponent } from './calgastos-ngx.component';

describe('CalgastosComponent', () => {
  let component: CalgastosNgxComponent;
  let fixture: ComponentFixture<CalgastosNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalgastosNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgastosNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
