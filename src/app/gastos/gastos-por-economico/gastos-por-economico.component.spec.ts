import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosPorEconomicoComponent } from './gastos-por-economico.component';

describe('GastosPorEconomicoComponent', () => {
  let component: GastosPorEconomicoComponent;
  let fixture: ComponentFixture<GastosPorEconomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosPorEconomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosPorEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
