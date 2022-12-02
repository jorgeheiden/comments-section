import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComentarioComponent } from './componentes/tarjeta-comentario/tarjeta-comentario.component';
import { AplicacionComponent } from './componentes/aplicacion/aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComentarioComponent,
    AplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
