import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-gris',
  templateUrl: './boton-gris.component.html'
})
export class BotonGrisComponent{
  @Input() label: string;

  @Output() click = new EventEmitter();

  clickEvent = () => this.click.emit();
}
