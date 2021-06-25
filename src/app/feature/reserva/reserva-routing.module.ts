import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { BorrarReservaComponent } from './components/borrar-reserva/borrar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: 'crear',
        component: CrearReservaComponent
      },
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'borrar',
        component: BorrarReservaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
