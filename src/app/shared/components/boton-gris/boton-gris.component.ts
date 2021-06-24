import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-boton-gris",
  templateUrl: "./boton-gris.component.html",
  styleUrls: ["./boton-gris.component.css"],
})
export class BotonGrisComponent implements OnInit {
  @Input() label: string;

  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickEvent = () => this.click.emit();
}
