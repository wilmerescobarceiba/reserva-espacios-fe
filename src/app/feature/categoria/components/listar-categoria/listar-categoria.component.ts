import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CategoriaService } from "@categoria/shared/service/categoria.service";
import { Categoria } from "@categoria/shared/model/categoria";

@Component({
  selector: "app-listar-categoria",
  templateUrl: "./listar-categoria.component.html",
  styleUrls: ["./listar-categoria.component.css"],
})
export class ListarCategoriaComponent implements OnInit {
  public listaCategorias: Observable<Categoria[]>;

  constructor(protected aliadoService: CategoriaService) {}

  ngOnInit(): void {
    this.init();
  }

  init = async () => {
    this.listaCategorias = this.aliadoService.consultar();
  };

  borradoExitoso = () => {
    this.listaCategorias = this.aliadoService.consultar();
  };

  creacionExitosa = () => {
    this.listaCategorias = this.aliadoService.consultar();
  };
}
