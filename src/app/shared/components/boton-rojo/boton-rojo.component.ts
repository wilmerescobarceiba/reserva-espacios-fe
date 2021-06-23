import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-rojo',
  templateUrl: './boton-rojo.component.html',
  styleUrls: ['./boton-rojo.component.css']
})
export class BotonRojoComponent implements OnInit {

  @Input()
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
