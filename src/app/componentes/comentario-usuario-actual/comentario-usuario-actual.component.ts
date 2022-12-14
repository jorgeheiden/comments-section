import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Comment, User } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-comentario-usuario-actual',
  templateUrl: './comentario-usuario-actual.component.html',
  styleUrls: ['./comentario-usuario-actual.component.scss']
})
export class ComentarioUsuarioActualComponent implements OnInit {

  @Input() comentario!:Comment
  @Input() indiceComentario!:number
  abrirEdicion:number = -1
  editFormComentario = new FormControl()
  voto!:number
  contador:number = 0
  mostrarModal:boolean = false
  usuarioActual!:User

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.voto = this.comentario.score
    this.usuarioActual = this.servicio.obtenerUsuarioActual()
  }

  editar(comentario:Comment, indiceComentario:number){
    if(this.abrirEdicion == -1){
      this.abrirEdicion = indiceComentario
    } else if(this.abrirEdicion !== indiceComentario){
      this.abrirEdicion = indiceComentario
    } else{
      this.abrirEdicion = -1
    }
    this.editFormComentario.setValue(comentario.content)

  }
  updateComentario(indice:number, editFormComentarioValue:string){
    console.log(editFormComentarioValue)
    this.servicio.actualizarComentario(indice, editFormComentarioValue)
    this.abrirEdicion = -1
  }
  votoMas(comentario:Comment){
    if(this.contador == 0){
      this.contador++
      this.voto += 1
    } else if(this.contador == -1){
      this.contador++
      this.voto += 1
    }
    console.log(this.contador)
   this.servicio.voto(comentario, this.voto)
  }
  votoMenos(comentario:Comment){
    if(this.contador == 0){
      this.contador--
      this.voto -= 1
    } else if(this.contador == 1){
      this.contador--
      this.voto -= 1
    }
    this.servicio.voto(comentario, this.voto)
  }
  modalEliminar(){
    if(this.mostrarModal == false){
      this.mostrarModal = true
    } else{
      this.mostrarModal = false
    }
  }
  eliminarComentario(indice:number){
    this.servicio.eliminarComentario(indice)
  }
}
