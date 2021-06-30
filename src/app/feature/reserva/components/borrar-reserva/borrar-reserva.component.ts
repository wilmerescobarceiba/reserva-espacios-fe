import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservaService } from '@reserva/shared/service/reserva.service';

@Component({
  selector: 'app-borrar-reserva',
  templateUrl: './borrar-reserva.component.html'
})
export class BorrarReservaComponent{
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected reservaService: ReservaService) {}

  borrar = () => {
    this.reservaService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  }
}
