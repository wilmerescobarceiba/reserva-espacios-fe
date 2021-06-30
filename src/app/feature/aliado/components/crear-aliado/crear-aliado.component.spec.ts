import { AliadoService } from '@aliado/shared/service/aliado.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { CrearAliadoComponent } from './crear-aliado.component';

describe('CrearAliadoComponent', () => {
  let component: CrearAliadoComponent;
  let fixture: ComponentFixture<CrearAliadoComponent>;
  let aliadoService: AliadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAliadoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AliadoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAliadoComponent);
    component = fixture.componentInstance;
    aliadoService = TestBed.inject(AliadoService);
    spyOn(aliadoService, 'guardar').and.returnValue(
      of({valor: 1})
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.aliadoForm.valid).toBeFalsy();
  });

  it('Registrando aliado', () => {
    expect(component.aliadoForm.valid).toBeFalsy();
    component.aliadoForm.controls.nit.setValue('001');
    component.aliadoForm.controls.nombre.setValue('Aliado test');
    expect(component.aliadoForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
