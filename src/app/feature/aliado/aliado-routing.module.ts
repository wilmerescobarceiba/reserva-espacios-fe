import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliadoComponent } from './components/aliado/aliado.component';
import { BorrarAliadoComponent } from './components/borrar-aliado/borrar-aliado.component';
import { CrearAliadoComponent } from './components/crear-aliado/crear-aliado.component';
import { ListarAliadoComponent } from './components/listar-aliado/listar-aliado.component';

const routes: Routes = [
  {
    path: '',
    component: AliadoComponent,
    children: [
      {
        path: 'crear',
        component: CrearAliadoComponent
      },
      {
        path: 'listar',
        component: ListarAliadoComponent
      },
      {
        path: 'borrar',
        component: BorrarAliadoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AliadoRoutingModule { }
