import { Injectable } from '@angular/core';
//PARA PODER IMPORTAR UN JSON:
//Agregar estas configuraciones en la seccion compilerOptions en el tsconfig.json:
//"resolveJsonModule": true,
//"esModuleInterop": true,
import data from "../../assets/datos/data.json"
import { Comment, User } from "../interfaces/comentarios"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  comentarios:Comment[]
  usuarioActual:User
  constructor() {
    //Acceder al JSON con anotacion de puntos Ej data.comments
    this.comentarios = data.comments
    this.usuarioActual = data.currentUser
   }

   obtenerComentarios(): Comment[]{
    return this.comentarios
   }
   newMensaje(mensaje:Comment): void{
    this.comentarios.push(mensaje)
   }
   respuesta(comentario:Comment, respuesta:Comment): void{
    let indice = this.comentarios.indexOf(comentario)
    this.comentarios[indice].replies?.push(respuesta)
   }
   respuestaARespuesta(comentario:Comment, respuesta:Comment){
    let indiceComentario = this.comentarios.indexOf(comentario)
    this.comentarios[indiceComentario].replies?.push(respuesta)
   }
   obtenerUsuarioActual(): User{
    return this.usuarioActual
   }
   actualizar(indiceC:number, indiceR:number, editFromValue:string){

    //Se utiliza un if como proteccion de tipo, en el caso que el objeto este vacio
    if(this.comentarios[indiceC].replies?.[indiceR] != undefined){
      this.comentarios[indiceC].replies![indiceR].content = editFromValue
    }
    //Esta opcion tambien funciona sin tirar error
    //this.comentarios[indiceC].replies![indiceR].content = editFromValue
   }
   eliminar(indiceComentario:number, indiceRespuesta:number){
     this.comentarios[indiceComentario].replies?.splice(indiceRespuesta, 1)
     
   }

   voto(comentario:Comment, voto:number){
      const indice = this.comentarios.indexOf(comentario)
      this.comentarios[indice].score = voto
   }
   votoRespuesta(comentario:Comment, respuesta:Comment, voto:number){
      const indiceComentario = this.comentarios.indexOf(comentario)
      const indiceRespuesta = this.comentarios[indiceComentario].replies!.indexOf(respuesta)
      this.comentarios[indiceComentario].replies![indiceRespuesta].score = voto
   }
}
