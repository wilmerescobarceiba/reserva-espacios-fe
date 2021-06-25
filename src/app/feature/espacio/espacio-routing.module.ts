import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEspacioComponent } from './components/crear-espacio/crear-espacio.component';
import { ListarEspacioComponent } from './components/listar-espacio/listar-espacio.component';
import { BorrarEspacioComponent } from './components/borrar-espacio/borrar-espacio.component';
import { EspacioComponent } from './components/espacio/espacio.component';


const routes: Routes = [
  {
    path: '',
    component: EspacioComponent,
    children: [
      {
        path: 'crear',
        component: CrearEspacioComponent
      },
      {
        path: 'listar',
        component: ListarEspacioComponent
      },
      {
        path: 'borrar',
        component: BorrarEspacioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioRoutingModule { }
