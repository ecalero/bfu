import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPagoBonoFamiliarUniversalComponent } from './inicio-pago-bono-familiar-universal.component';

describe('InicioPagoBonoFamiliarUniversalComponent', () => {
  let component: InicioPagoBonoFamiliarUniversalComponent;
  let fixture: ComponentFixture<InicioPagoBonoFamiliarUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPagoBonoFamiliarUniversalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPagoBonoFamiliarUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
