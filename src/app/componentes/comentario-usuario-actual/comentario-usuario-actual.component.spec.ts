import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioUsuarioActualComponent } from './comentario-usuario-actual.component';

describe('ComentarioUsuarioActualComponent', () => {
  let component: ComentarioUsuarioActualComponent;
  let fixture: ComponentFixture<ComentarioUsuarioActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioUsuarioActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioUsuarioActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
