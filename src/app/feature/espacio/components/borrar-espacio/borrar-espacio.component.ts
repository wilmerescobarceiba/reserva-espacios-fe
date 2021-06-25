import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EspacioService } from "@espacio/shared/service/espacio.service";

@Component({
  selector: "app-borrar-espacio",
  templateUrl: "./borrar-espacio.component.html"
})
export class BorrarEspacioComponent{
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected espacioService: EspacioService) {}

  borrar = () => {
    this.espacioService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  };
}
