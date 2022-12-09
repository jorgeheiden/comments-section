import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Comment, User } from 'src/app/interfaces/comentarios';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-respuesta-usuario-actual',
  templateUrl: './respuesta-usuario-actual.component.html',
  styleUrls: ['./respuesta-usuario-actual.component.scss']
})
export class RespuestaUsuarioActualComponent implements OnInit {

  constructor(private servicio: ServiceService) { }
  
  @Input() respuesta!:Comment
  @Input() indiceComentario!:number
  @Input() indiceRespuesta!:number
  indiceC:number = -1
  indiceR:number = -1
  usuarioActual!:User
  abrirEdicion:string = ""
  editForm = new FormControl
  mostarModal:boolean = false

  ngOnInit(): void {
    this.usuarioActual = this.servicio.obtenerUsuarioActual()
    console.log(this.respuesta)
  }

  editar(indiceComentario:number, indiceRespuesta:number, respuesta:string){
    if(this.indiceC == -1 && this.indiceR == -1){
      this.indiceC = indiceComentario
      this.indiceR = indiceRespuesta
    } else if(this.indiceC !== indiceComentario && this.indiceR !== indiceRespuesta){
      this.indiceC = indiceComentario
      this.indiceR = indiceRespuesta
    } else{
      this.indiceC = -1
      this.indiceR = -1
    }
    this.editForm.setValue(respuesta)
  }

  update(indiceC:number, indiceR:number, editFromValue:string){
    this.servicio.actualizar(indiceC, indiceR, editFromValue)
    this.indiceC = -1
    this.indiceR = -1
  }

  modalEliminar(){
    if(this.mostarModal == false){
      this.mostarModal = true
    } else{
      this.mostarModal = false
    }

    
  }

}
