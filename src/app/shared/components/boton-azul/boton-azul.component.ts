import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-boton-azul",
  templateUrl: "./boton-azul.component.html",
  styleUrls: ["./boton-azul.component.css"],
})
export class BotonPrimarioComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;

  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickEvent = () => this.click.emit();
}
