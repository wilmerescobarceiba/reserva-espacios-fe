import { NgModule } from '@angular/core';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { BorrarCategoriaComponent } from './components/borrar-categoria/borrar-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { SharedModule } from '@shared/shared.module';
import { CategoriaService } from './shared/service/categoria.service';



@NgModule({
  declarations: [
    CrearCategoriaComponent,
    ListarCategoriaComponent,
    BorrarCategoriaComponent,
    CategoriaComponent
  ],
  imports: [
    CategoriaRoutingModule,
    SharedModule
  ],
  providers: [CategoriaService]
})
export class CategoriaModule { }
