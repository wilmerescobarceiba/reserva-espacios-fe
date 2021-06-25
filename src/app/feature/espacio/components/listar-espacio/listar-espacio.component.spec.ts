import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Espacio } from '@espacio/shared/model/espacio';
import { EspacioService } from '@espacio/shared/service/espacio.service';
import { of } from 'rxjs';

import { ListarEspacioComponent } from './listar-espacio.component';

describe('ListarEspacioComponent', () => {
  let component: ListarEspacioComponent;
  let fixture: ComponentFixture<ListarEspacioComponent>;
  let espacioService: EspacioService;
  const listaEspacios: Espacio[] = [
    new Espacio(1, 'Espacio 1','Espacio 1','Espacio 1',0,10000,'Descripción test', 1),
    new Espacio(2, 'Espacio 2','Espacio 2','Espacio 2',0,10000,'Descripción test', 1),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarEspacioComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [EspacioService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspacioComponent);
    component = fixture.componentInstance;
    espacioService = TestBed.inject(EspacioService);
    spyOn(espacioService, "consultar").and.returnValue(of(listaEspacios));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.listaEspacios.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
