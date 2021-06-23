import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-azul',
  templateUrl: './boton-azul.component.html',
  styleUrls: ['./boton-azul.component.css']
})
export class BotonPrimarioComponent implements OnInit {

  @Input()
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
