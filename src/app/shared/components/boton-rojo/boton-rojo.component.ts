import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-rojo',
  templateUrl: './boton-rojo.component.html',
  styleUrls: ['./boton-rojo.component.css']
})
export class BotonRojoComponent implements OnInit {

  @Input() label: string;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  clickEvent = () =>this.click.emit()

}
