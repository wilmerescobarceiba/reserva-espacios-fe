import { NgModule } from '@angular/core';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { BorrarReservaComponent } from './components/borrar-reserva/borrar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaService } from './shared/service/reserva.service';
import { AliadoService } from '@aliado/shared/service/aliado.service';
import { EspacioService } from '@espacio/shared/service/espacio.service';
import { HorarioService } from '@horario/shared/service/horario.service';

@NgModule({
  declarations: [
    ListarReservaComponent,
    CrearReservaComponent,
    BorrarReservaComponent,
    ReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule
  ],
  providers: [ReservaService, AliadoService, EspacioService, HorarioService]
})
export class ReservaModule { }
