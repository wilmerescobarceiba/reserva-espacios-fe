import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Aliado } from '../model/aliado';
import { AliadoService } from './aliado.service';
import { HttpResponse } from '@angular/common/http';

describe('AliadoService', () => {
  let httpMock: HttpTestingController;
  let service: AliadoService;
  const apiEndpointAliadoConsulta = `${environment.endpoint}/aliado`;
  const apiEndpointAliados = `${environment.endpoint}/aliados`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AliadoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AliadoService);
  });

  it('should be created', () => {
    const aliadoService: AliadoService = TestBed.inject(AliadoService);
    expect(aliadoService).toBeTruthy();
  });

  it('deberia listar aliados', () => {
    const dummyAliados = [
      new Aliado(1, '123', 'Aliado 1' ), new Aliado(2, '1234', 'Aliado 2' )
    ];
    service.consultar().subscribe(aliados => {
      expect(aliados.length).toBe(2);
      expect(aliados).toEqual(dummyAliados);
    });
    const req = httpMock.expectOne(apiEndpointAliadoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAliados);
  });

  it('deberia crear un aliado', () => {
    const dummyAliado = new Aliado(1, '123', 'Aliado 1' );
    service.guardar(dummyAliado).subscribe((respuesta) => {
      expect(respuesta).toEqual({'valor':1});
    });
    const req = httpMock.expectOne(apiEndpointAliados);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<any>({body: {'valor':1}}));
  });

  it('deberia eliminar un producto', () => {
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAliados}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
