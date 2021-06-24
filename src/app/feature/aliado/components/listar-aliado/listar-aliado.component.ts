import { Aliado } from '@aliado/shared/model/aliado';
import { AliadoService } from '@aliado/shared/service/aliado.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-aliado',
  templateUrl: './listar-aliado.component.html',
  styleUrls: ['./listar-aliado.component.css']
})
export class ListarAliadoComponent implements OnInit {

  public listaAliados: Observable<Aliado[]>;

  constructor(protected aliadoService: AliadoService) { }

  ngOnInit(): void {
    this.init();
  }

  init = async() => {
    this.listaAliados = this.aliadoService.consultar();
  }

  borradoExitoso = () => {
    this.listaAliados = this.aliadoService.consultar();
  }

  creacionExitosa = () => {
    this.listaAliados = this.aliadoService.consultar();
  }

}
