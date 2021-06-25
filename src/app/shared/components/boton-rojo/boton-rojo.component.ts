import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-boton-rojo",
  templateUrl: "./boton-rojo.component.html",
  styleUrls: ["./boton-rojo.component.css"],
})
export class BotonRojoComponent{
  @Input() label: string;

  @Output() click = new EventEmitter();

  clickEvent = () => this.click.emit();
}
