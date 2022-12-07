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
  usuarioActual!:User
  @Input() respuesta!:Comment

  ngOnInit(): void {
    this.usuarioActual = this.servicio.obtenerUsuarioActual()
  }

}
