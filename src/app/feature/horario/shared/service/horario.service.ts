import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Horario } from '../model/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Horario[]>(`${environment.endpoint}/horario`, this.http.optsName('consultar horarios'));
  }
}
