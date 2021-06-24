import { AliadoService } from "@aliado/shared/service/aliado.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-borrar-aliado",
  templateUrl: "./borrar-aliado.component.html",
  styleUrls: ["./borrar-aliado.component.css"],
})
export class BorrarAliadoComponent implements OnInit {
  @Input()
  id: number;

  @Output()
  borradoExitoso = new EventEmitter();

  constructor(protected aliadoService: AliadoService) {}

  ngOnInit(): void {}

  borrar = () => {
    this.aliadoService
      .eliminar(this.id)
      .subscribe(() => this.borradoExitoso.emit());
  };
}
