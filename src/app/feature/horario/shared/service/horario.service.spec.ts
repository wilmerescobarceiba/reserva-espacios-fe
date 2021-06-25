import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Horario } from '../model/horario';

import { HorarioService } from './horario.service';

describe('HorarioService', () => {

  let httpMock: HttpTestingController;
  let service: HorarioService;
  const apiEndpointHorarioConsulta = `${environment.endpoint}/horario`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HorarioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(HorarioService);
  });

  it('should be created', () => {
    const productService: HorarioService = TestBed.inject(HorarioService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar horarios', () => {
    const dummyHorarios = [
      new Horario(1, 'H07_08'), new Horario(2, 'H08_09')
    ];
    service.consultar().subscribe(horarios => {
      expect(horarios.length).toBe(2);
      expect(horarios).toEqual(dummyHorarios);
    });
    const req = httpMock.expectOne(apiEndpointHorarioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHorarios);
  });
});
