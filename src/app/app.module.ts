import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { CancionDetalleComponent } from './cancion-detalle/cancion-detalle.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { PlayerComponent } from './player/player.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    CancionDetalleComponent,
    FilterPipe,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
