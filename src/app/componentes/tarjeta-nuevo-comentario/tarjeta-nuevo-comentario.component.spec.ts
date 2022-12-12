import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaNuevoComentarioComponent } from './tarjeta-nuevo-comentario.component';

describe('TarjetaNuevoComentarioComponent', () => {
  let component: TarjetaNuevoComentarioComponent;
  let fixture: ComponentFixture<TarjetaNuevoComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaNuevoComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaNuevoComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
