import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../cancion';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() cancion: Cancion;
  constructor() { }

  ngOnInit() {
  }

}
