import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AliadoRoutingModule } from './aliado-routing.module';
import { AliadoComponent } from './components/aliado/aliado.component';
import { CrearAliadoComponent } from './components/crear-aliado/crear-aliado.component';
import { BorrarAliadoComponent } from './components/borrar-aliado/borrar-aliado.component';
import { ListarAliadoComponent } from './components/listar-aliado/listar-aliado.component';


@NgModule({
  declarations: [
    AliadoComponent,
    CrearAliadoComponent,
    BorrarAliadoComponent,
    ListarAliadoComponent
  ],
  imports: [
    CommonModule,
    AliadoRoutingModule
  ]
})
export class AliadoModule { }
