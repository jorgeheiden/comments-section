import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-tarjeta-nuevo-comentario',
  templateUrl: './tarjeta-nuevo-comentario.component.html',
  styleUrls: ['./tarjeta-nuevo-comentario.component.scss']
})
export class TarjetaNuevoComentarioComponent implements OnInit {

  formNuevoMensaje = new FormControl("", [Validators.required])
  mensaje:any = ""
  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  nuevoMensaje(){
    this.mensaje = this.formNuevoMensaje.value
  
    const nuevoMensaje:Comment = {
      "id": 1,
      "content": this.mensaje,
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
    if(this.formNuevoMensaje.valid){
      this.servicio.newMensaje(nuevoMensaje)
      //this.formNuevoMensaje.setValue("")
      this.formNuevoMensaje.reset()
    }
   
  }

}
