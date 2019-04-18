import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorEconomicoComponent } from './ingresos-por-economico.component';

describe('IngresosPorEconomicoComponent', () => {
  let component: IngresosPorEconomicoComponent;
  let fixture: ComponentFixture<IngresosPorEconomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosPorEconomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosPorEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
