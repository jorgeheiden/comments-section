import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-tarjeta-nuevo-comentario',
  templateUrl: './tarjeta-nuevo-comentario.component.html',
  styleUrls: ['./tarjeta-nuevo-comentario.component.scss']
})
export class TarjetaNuevoComentarioComponent implements OnInit {

  formNuevoMensaje = new FormControl()

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  nuevoMensaje(){
    const nuevoMensaje:Comment = {
      "id": 1,
      "content": this.formNuevoMensaje.value,
      "createdAt": "Just now",
      "score": 0,
      "user": {
        "image": { 
          "png": "../../../assets/images/avatars/image-juliusomo.png",
          "webp": "../../../assets/images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "replies": []
    }
    this.servicio.newMensaje(nuevoMensaje)
    this.formNuevoMensaje.setValue("")
  }

}
