import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent } from './inicia-pago-segundo-bono-universal-fase1-deposito-cuenta.component';

describe('IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent', () => {
  let component: IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent;
  let fixture: ComponentFixture<IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaPagoSegundoBonoUniversalFase1DepositoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
