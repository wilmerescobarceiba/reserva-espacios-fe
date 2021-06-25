import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { HttpService } from '@core/services/http.service';
import { EspacioService } from '@espacio/shared/service/espacio.service';
import { of } from 'rxjs';

import { CrearEspacioComponent } from './crear-espacio.component';

describe('CrearEspacioComponent', () => {
  let component: CrearEspacioComponent;
  let fixture: ComponentFixture<CrearEspacioComponent>;
  let espacioService: EspacioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEspacioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [EspacioService, CategoriaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEspacioComponent);
    component = fixture.componentInstance;
    espacioService = TestBed.inject(EspacioService);
    spyOn(espacioService, 'guardar').and.returnValue(
      of({valor:1})
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.espacioForm.valid).toBeFalsy();
  });

  it('Registrando espacio', () => {
    expect(component.espacioForm.valid).toBeFalsy();
    component.espacioForm.controls.codigo.setValue('001');
    component.espacioForm.controls.nombre.setValue('Espacio test');
    component.espacioForm.controls.fotografiaUpload.setValue('Espacio test');
    component.espacioForm.controls.capacidad.setValue(10);
    component.espacioForm.controls.costo.setValue(10000);
    component.espacioForm.controls.descripcion.setValue('Descripcion prueba');
    component.espacioForm.controls.idcategoria.setValue(1);

    expect(component.espacioForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
