import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPruebaComponent } from './noticia-prueba.component';

describe('NoticiaPruebaComponent', () => {
  let component: NoticiaPruebaComponent;
  let fixture: ComponentFixture<NoticiaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
