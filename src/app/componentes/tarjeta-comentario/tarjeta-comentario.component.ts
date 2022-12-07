import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Comment, User } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.scss']
})
export class TarjetaComentarioComponent implements OnInit {
  
  @Input() comentario!:Comment
  mostrarFormulario:string = ""
  respuestaForm = new FormControl()
  usuarioActual!:User

  constructor(private servicio:ServiceService) { }
  
  ngOnInit(): void {
    this.usuarioActual = this.servicio.obtenerUsuarioActual()
  }

  abrirFormReply(user:string): void{

    this.respuestaForm.setValue("@" + user + " ")

    if(this.mostrarFormulario == ""){
      this.mostrarFormulario = user
    } else if(this.mostrarFormulario !== user){
      this.mostrarFormulario = user
    } else{
      this.mostrarFormulario = ""
    }
  }

  reply(comentario:Comment): void{
    const respuesta:Comment = {
      "id": 5,
      "content": this.respuestaForm.value,
      "createdAt": "1 month ago",
      "score": 0,
      "user": {
        "image": { 
          "png": this.usuarioActual.image.png,
          "webp": this.usuarioActual.image.webp
        },
        "username": this.usuarioActual.username
      },
      "replies": []
    }
    this.servicio.respuesta(comentario, respuesta)
    this.abrirFormReply(comentario.user.username)
  }

}
