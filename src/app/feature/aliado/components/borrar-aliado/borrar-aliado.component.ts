import { AliadoService } from "@aliado/shared/service/aliado.service";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-borrar-aliado",
  templateUrl: "./borrar-aliado.component.html"
})
export class BorrarAliadoComponent {
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected aliadoService: AliadoService) {}

  borrar = () => {
    this.aliadoService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  };
}
