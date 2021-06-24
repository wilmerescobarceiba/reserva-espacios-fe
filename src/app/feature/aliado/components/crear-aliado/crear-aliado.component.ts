import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-aliado',
  templateUrl: './crear-aliado.component.html',
  styleUrls: ['./crear-aliado.component.css']
})
export class CrearAliadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal = () => {
    alert('Abrir modal');
  }

}
