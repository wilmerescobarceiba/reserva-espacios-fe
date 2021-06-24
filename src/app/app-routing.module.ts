import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from './core/guard/security.guard';
import { HomeComponent } from './feature/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'categoria', loadChildren: () => import('./feature/categoria/categoria.module').then(mod => mod.CategoriaModule) },
  { path: 'aliado', loadChildren: () => import('./feature/aliado/aliado.module').then(mod => mod.AliadoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
