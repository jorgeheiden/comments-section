import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.scss']
})
export class TarjetaComentarioComponent implements OnInit {

  
  @Input() comentario!:Comment
  mostrarFormulario:string = ""
 
  constructor() { }
  
  ngOnInit(): void {

  }

  abrirFormReply(user:string): void{
    if(this.mostrarFormulario == ""){
      this.mostrarFormulario = user
    } else if(this.mostrarFormulario !== user){
      this.mostrarFormulario = user
    } else{
      this.mostrarFormulario = ""
    }
  }

}
