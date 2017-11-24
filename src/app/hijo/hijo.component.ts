import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() aviso: string;
  @Output() msj_hijo = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  marcar() {
    this.msj_hijo.emit(this.aviso);
  }
}
