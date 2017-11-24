import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  avisos = [
            'Mañana no hay clases',
            'Mañana Hay Kermes',
            'Hoy es el Black Friday',
            'La navidad esta cerca'];
  mensaje_del_hijo: string;
  constructor() { }

  ngOnInit() {
  }

  aceptarMsj($event) {
    this.mensaje_del_hijo = $event;
  }

}
