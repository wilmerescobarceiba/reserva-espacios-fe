import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Aliado } from '../model/aliado';

@Injectable({
  providedIn: 'root'
})
export class AliadoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Aliado[]>(`${environment.endpoint}/aliado`, this.http.optsName('consultar aliados'));
  }

}
