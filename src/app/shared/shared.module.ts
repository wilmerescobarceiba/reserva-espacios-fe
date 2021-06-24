import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { BotonPrimarioComponent } from './components/boton-azul/boton-azul.component';
import { BotonRojoComponent } from './components/boton-rojo/boton-rojo.component';
import { BotonGrisComponent } from './components/boton-gris/boton-gris.component';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    BotonPrimarioComponent,
    BotonRojoComponent,
    BotonGrisComponent
  ],
  imports: [ReactiveFormsModule, FormsModule, DialogModule,TableModule],
  exports: [
    CommonModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    BotonPrimarioComponent,
    BotonRojoComponent,
    BotonGrisComponent,

  ]
})
export class SharedModule { }
