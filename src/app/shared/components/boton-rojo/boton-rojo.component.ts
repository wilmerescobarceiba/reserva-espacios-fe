import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-boton-rojo",
  templateUrl: "./boton-rojo.component.html"
})
export class BotonRojoComponent{
  @Input() label: string;

  @Output() click = new EventEmitter();

  clickEvent = () => this.click.emit();
}
