import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { EspacioService } from "@espacio/shared/service/espacio.service";
import { Espacio } from "@espacio/shared/model/espacio";
import { Categoria } from "@categoria/shared/model/categoria";

@Component({
  selector: "app-listar-espacio",
  templateUrl: "./listar-espacio.component.html"
})
export class ListarEspacioComponent implements OnInit {
  public listaEspacios: Observable<Espacio[]>;
  public listaCategorias: Observable<Categoria[]>;

  constructor(protected aliadoService: EspacioService) {}

  ngOnInit(): void {
    this.init();
  }

  init = async () => {
    this.listaEspacios = this.aliadoService.consultar();
  };

  borradoExitoso = () => {
    this.listaEspacios = this.aliadoService.consultar();
  };

  creacionExitosa = () => {
    this.listaEspacios = this.aliadoService.consultar();
  };
}
