import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-boton-gris",
  templateUrl: "./boton-gris.component.html",
  styleUrls: ["./boton-gris.component.css"],
})
export class BotonGrisComponent{
  @Input() label: string;

  @Output() click = new EventEmitter();

  clickEvent = () => this.click.emit();
}
