import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Respuesta } from '@shared/model/respuesta';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { ReservaService } from './reserva.service';


describe('ReservaService', () => {
  let httpMock: HttpTestingController;
  let service: ReservaService;
  const apiEndpointReservaConsulta = `${environment.endpoint}/reserva`;
  const apiEndpointReservas = `${environment.endpoint}/reservas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    const productService: ReservaService = TestBed.inject(ReservaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const dummyReservas = [
      new Reserva(1, 1, 1, 1, '2021-06-25', 10000), new Reserva(2, 2, 2, 2, '2021-06-25', 10000)
    ];
    service.consultar().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia crear una reserva', () => {
    const dummyReserva = new Reserva(3, 3, 3, 3, '2021-06-25', 10000);
    service.guardar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual({valor: 3});
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Respuesta>({body: {valor: 3}}));
  });

  it('deberia eliminar un reserva', () => {
    const dummyReserva = new Reserva(1, 1, 1, 1, '2021-06-25', 10000);
    service.eliminar(dummyReserva.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
