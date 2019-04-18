import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosPorProgramaComponent } from './gastos-por-programa.component';

describe('GastosPorProgramaComponent', () => {
  let component: GastosPorProgramaComponent;
  let fixture: ComponentFixture<GastosPorProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosPorProgramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosPorProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
