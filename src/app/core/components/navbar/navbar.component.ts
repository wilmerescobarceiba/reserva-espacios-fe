import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input()
  items: MenuItem[];

  constructor() {}

  ngOnInit() {}

  get icon() {
    return environment.icon;
  }
}
