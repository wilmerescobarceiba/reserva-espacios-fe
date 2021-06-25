import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public items: MenuItem[] = [
    { url: '/home', nombre: 'principal' },
    { url: '/aliado', nombre: 'aliado' },
    { url: '/categoria', nombre: 'categoria' },
    { url: '/espacio', nombre: 'espacio' },
    { url: '/reserva', nombre: 'reserva' },
  ];


}
