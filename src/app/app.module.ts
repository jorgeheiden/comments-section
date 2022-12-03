import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComentarioComponent } from './componentes/tarjeta-comentario/tarjeta-comentario.component';
import { AplicacionComponent } from './componentes/aplicacion/aplicacion.component';
import { RespuestaComponent } from './componentes/respuesta/respuesta.component';
import { RespuestaUsuarioActualComponent } from './componentes/respuesta-usuario-actual/respuesta-usuario-actual.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComentarioComponent,
    AplicacionComponent,
    RespuestaComponent,
    RespuestaUsuarioActualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
