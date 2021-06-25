import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ReservaService } from "@reserva/shared/service/reserva.service";
import { Reserva } from "@reserva/shared/model/reserva";
import { Categoria } from "@categoria/shared/model/categoria";

@Component({
  selector: "app-listar-reserva",
  templateUrl: "./listar-reserva.component.html"
})
export class ListarReservaComponent implements OnInit {
  public listaReservas: Observable<Reserva[]>;
  public listaCategorias: Observable<Categoria[]>;

  constructor(protected aliadoService: ReservaService) {}

  ngOnInit(): void {
    this.init();
  }

  init = async () => {
    this.listaReservas = this.aliadoService.consultar();
  };

  borradoExitoso = () => {
    this.listaReservas = this.aliadoService.consultar();
  };

  creacionExitosa = () => {
    this.listaReservas = this.aliadoService.consultar();
  };
}
