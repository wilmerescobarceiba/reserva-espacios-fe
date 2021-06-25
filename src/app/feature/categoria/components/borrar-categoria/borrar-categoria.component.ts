import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CategoriaService } from "@categoria/shared/service/categoria.service";

@Component({
  selector: "app-borrar-categoria",
  templateUrl: "./borrar-categoria.component.html"
})
export class BorrarCategoriaComponent{
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected categoriaService: CategoriaService) {}

  borrar = () => {
    this.categoriaService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  };
}
