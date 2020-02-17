import { Injectable } from '@angular/core';
import { CANCIONES } from './mock-canciones';
import { Cancion } from './cancion';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  getCanciones(): Observable<Cancion[]> {
    return of(CANCIONES);
  }
  constructor() { }
}
