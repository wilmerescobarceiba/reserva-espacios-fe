import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CategoriaService } from "@categoria/shared/service/categoria.service";

@Component({
  selector: "app-borrar-categoria",
  templateUrl: "./borrar-categoria.component.html",
  styleUrls: ["./borrar-categoria.component.css"],
})
export class BorrarCategoriaComponent implements OnInit {
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected categoriaService: CategoriaService) {}

  ngOnInit(): void {}

  borrar = () => {
    this.categoriaService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  };
}
