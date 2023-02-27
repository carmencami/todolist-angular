import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
}
export class TareaPendiente {
  public nombre: string
  public terminada: boolean
  constructor(nombre:string, terminada ?: boolean){
  this.terminada = terminada ? terminada : false;
  this.nombre = nombre;
  }
}
