import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-azul',
  templateUrl: './boton-azul.component.html'
})
export class BotonPrimarioComponent{
  @Input() label: string;
  @Input() type: string;

  @Output() click = new EventEmitter();

  clickEvent = () => this.click.emit();
}
