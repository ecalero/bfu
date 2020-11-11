import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusquenosPrefierencajerosAgentesComponent } from './cusquenos-prefierencajeros-agentes.component';

describe('CusquenosPrefierencajerosAgentesComponent', () => {
  let component: CusquenosPrefierencajerosAgentesComponent;
  let fixture: ComponentFixture<CusquenosPrefierencajerosAgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusquenosPrefierencajerosAgentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusquenosPrefierencajerosAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
