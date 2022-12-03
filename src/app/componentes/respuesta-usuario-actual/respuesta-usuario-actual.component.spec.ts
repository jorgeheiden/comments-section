import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaUsuarioActualComponent } from './respuesta-usuario-actual.component';

describe('RespuestaUsuarioActualComponent', () => {
  let component: RespuestaUsuarioActualComponent;
  let fixture: ComponentFixture<RespuestaUsuarioActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaUsuarioActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestaUsuarioActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
