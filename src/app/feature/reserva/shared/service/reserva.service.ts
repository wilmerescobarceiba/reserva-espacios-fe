import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Respuesta } from '@shared/model/respuesta';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';


@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reserva`, this.http.optsName('consultar reservas'));
  }

  public guardar(reserva: Reserva) {
    console.warn('Guardando');

    return this.http.doPost<Reserva, Respuesta>(`${environment.endpoint}/reservas`, reserva,
                                                this.http.optsName('crear reservas'));
  }

  public eliminar(idReserva: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`,
                                                 this.http.optsName('eliminar reservas'));
  }
}
