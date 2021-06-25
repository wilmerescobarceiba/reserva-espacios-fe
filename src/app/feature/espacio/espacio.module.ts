import { NgModule } from '@angular/core';
import { EspacioComponent } from './components/espacio/espacio.component';
import { BorrarEspacioComponent } from './components/borrar-espacio/borrar-espacio.component';
import { CrearEspacioComponent } from './components/crear-espacio/crear-espacio.component';
import { ListarEspacioComponent } from './components/listar-espacio/listar-espacio.component';
import { EspacioRoutingModule } from './espacio-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EspacioService } from './shared/service/espacio.service';



@NgModule({
  declarations: [
    EspacioComponent,
    BorrarEspacioComponent,
    CrearEspacioComponent,
    ListarEspacioComponent
  ],
  imports: [
    EspacioRoutingModule,
    SharedModule,
  ],
  providers: [EspacioService]
})
export class EspacioModule { }
