import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaLenguajes: string[] = ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS', 'PHP'];

  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void {
    this.habilitar = ( this.habilitar == true) ? false : true;
  }
}
