import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoDerechoComponent } from './lado-derecho.component';

describe('LadoDerechoComponent', () => {
  let component: LadoDerechoComponent;
  let fixture: ComponentFixture<LadoDerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadoDerechoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadoDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
