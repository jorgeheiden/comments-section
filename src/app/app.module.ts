import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComentarioComponent } from './componentes/tarjeta-comentario/tarjeta-comentario.component';
import { AplicacionComponent } from './componentes/aplicacion/aplicacion.component';
import { RespuestaComponent } from './componentes/respuesta/respuesta.component';
import { RespuestaUsuarioActualComponent } from './componentes/respuesta-usuario-actual/respuesta-usuario-actual.component';
import { TarjetaNuevoComentarioComponent } from './componentes/tarjeta-nuevo-comentario/tarjeta-nuevo-comentario.component';
import { ComentarioUsuarioActualComponent } from './componentes/comentario-usuario-actual/comentario-usuario-actual.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComentarioComponent,
    AplicacionComponent,
    RespuestaComponent,
    RespuestaUsuarioActualComponent,
    TarjetaNuevoComentarioComponent,
    ComentarioUsuarioActualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
