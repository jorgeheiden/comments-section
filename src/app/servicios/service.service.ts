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

}
