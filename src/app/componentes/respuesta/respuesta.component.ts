import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss']
})
export class RespuestaComponent implements OnInit {

  @Input() respuesta!:Comment

  constructor() { }

  ngOnInit(): void {
    
  }

}
