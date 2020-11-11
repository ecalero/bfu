import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceCajerosBuqueComponent } from './conoce-cajeros-buque.component';

describe('ConoceCajerosBuqueComponent', () => {
  let component: ConoceCajerosBuqueComponent;
  let fixture: ComponentFixture<ConoceCajerosBuqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConoceCajerosBuqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceCajerosBuqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
