import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoyComenzoFase1BfuComponent } from './hoy-comenzo-fase1-bfu.component';

describe('HoyComenzoFase1BfuComponent', () => {
  let component: HoyComenzoFase1BfuComponent;
  let fixture: ComponentFixture<HoyComenzoFase1BfuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoyComenzoFase1BfuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoyComenzoFase1BfuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
