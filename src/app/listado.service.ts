import { Injectable } from '@angular/core';
// import { CANCIONES } from './mock-canciones';
import { Cancion } from './cancion';
import { Observable, of } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class ListadoService {
    public canciones: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.canciones = db.collection('canciones').valueChanges();
    }
    getCanciones(){
      return this.canciones;
    }
    //   getCanciones(): Observable<Cancion[]> {
    //     return of(CANCIONES);
    //   }
}
