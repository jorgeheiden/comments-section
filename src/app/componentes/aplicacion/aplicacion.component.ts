import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
//Importar la interface
import { Comment } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.scss']
})
export class AplicacionComponent implements OnInit {

  comentarios!: Comment[]
  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.comentarios = this.servicio.obtenerComentarios()
  }

}
