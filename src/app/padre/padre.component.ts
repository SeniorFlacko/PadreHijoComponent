import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  avisos = ['Mañana no hay clases', 'Mañana Hay Kermes', 'Hoy es el Black Friday'];
  constructor() { }

  ngOnInit() {
  }

}
