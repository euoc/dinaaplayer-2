import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CANCIONES } from '../mock-canciones';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones = CANCIONES;
  selectedCancion: Cancion;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }

}

console.log(CANCIONES);
