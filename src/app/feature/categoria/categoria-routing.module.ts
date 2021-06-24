import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { BorrarCategoriaComponent } from './components/borrar-categoria/borrar-categoria.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
    children: [
      {
        path: 'crear',
        component: CrearCategoriaComponent
      },
      {
        path: 'listar',
        component: ListarCategoriaComponent
      },
      {
        path: 'borrar',
        component: BorrarCategoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
