import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EspacioService } from './espacio.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Espacio } from '../model/espacio';
import { HttpResponse } from '@angular/common/http';
import { Respuesta } from '@shared/model/respuesta';

describe('EspacioService', () => {
  let httpMock: HttpTestingController;
  let service: EspacioService;
  const apiEndpointEspacioConsulta = `${environment.endpoint}/espacio`;
  const apiEndpointEspacios = `${environment.endpoint}/espacios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EspacioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EspacioService);
  });

  it('should be created', () => {
    const productService: EspacioService = TestBed.inject(EspacioService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar espacios', () => {
    const dummyEspacios = [
      new Espacio(1, 'Espacio 1', 'Espacio 1', 'Espacio 1', 0, 10000, 'Descripción test', 1), new Espacio(2, 'Espacio 2', 'Espacio 2', 'Espacio 2', 0, 10000, 'Descripción test', 1)
    ];
    service.consultar().subscribe(espacios => {
      expect(espacios.length).toBe(2);
      expect(espacios).toEqual(dummyEspacios);
    });
    const req = httpMock.expectOne(apiEndpointEspacioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEspacios);
  });

  it('deberia crear una espacio', () => {
    const dummyEspacio = new Espacio(3, 'Espacio 1', 'Espacio 1', 'Espacio 1', 0, 10000, 'Descripción test', 1);
    service.guardar(dummyEspacio).subscribe((respuesta) => {
      expect(respuesta).toEqual({valor: 3});
    });
    const req = httpMock.expectOne(apiEndpointEspacios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Respuesta>({body: {valor: 3}}));
  });

  it('deberia eliminar un espacio', () => {
    const dummyEspacio = new Espacio(1, 'Espacio 1', 'Espacio 1', 'Espacio 1', 0, 10000, 'Descripción test', 1);
    service.eliminar(dummyEspacio.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointEspacios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
