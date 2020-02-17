import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { ListadoService } from '../listado.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones : Cancion[];
  selectedCancion: Cancion;

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }

  getCanciones(): void {
  this.listadoService.getCanciones()
    .subscribe(
      canciones =>
      this.canciones = canciones
    );
  }

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.getCanciones();
  }



}
