import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Comment, User } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss']
})
export class RespuestaComponent implements OnInit {

  @Input() respuesta!:Comment
  @Input() comentario!:Comment
  usuarioActual!:User
  abrirFormRespuesta:string = ""
  formReplyRespuesta = new FormControl()

  constructor(private servicio: ServiceService) { }

  ngOnInit(): void {
    this.usuarioActual = this.servicio.obtenerUsuarioActual()
  }

  abrirFormReplyRespuesta(user:string): void{
    this.formReplyRespuesta.setValue("@" + user + " ")

    if(this.abrirFormRespuesta == ""){
      this.abrirFormRespuesta = user
    } else if(this.abrirFormRespuesta !== user){
      this.abrirFormRespuesta = user
    } else{
      this.abrirFormRespuesta = ""
    }
  }

  replyRespuesta(respuesta:Comment){
    const resp = {
      "id": 3,
          "content": this.formReplyRespuesta.value,
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "",
          "user": {
            "image": { 
              "png": this.usuarioActual.image.png,
              "webp": this.usuarioActual.image.webp
            },
            "username": this.usuarioActual.username
          }
    }
    this.servicio.respuestaARespuesta(this.comentario, resp)
    this.abrirFormReplyRespuesta(respuesta.user.username)
  }
}
