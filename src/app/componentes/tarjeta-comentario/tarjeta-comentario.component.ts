import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.scss']
})
export class TarjetaComentarioComponent implements OnInit {

  
  @Input() comentario!:Comment
 
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.comentario)
    
  }



}
