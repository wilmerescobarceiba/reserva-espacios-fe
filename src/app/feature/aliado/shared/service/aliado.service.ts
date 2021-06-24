import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Respuesta } from '@shared/model/respuesta';
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

  public guardar(aliado: Aliado) {
    return this.http.doPost<Aliado, Respuesta>(`${environment.endpoint}/aliados`, aliado,
                                                this.http.optsName('crear aliado'));
  }

  public eliminar(idAliado: number) {
    console.warn(`${environment.endpoint}/aliados/${idAliado}`);

    return this.http.doDelete<boolean>(`${environment.endpoint}/aliados/${idAliado}`,
                                                 this.http.optsName('eliminar aliado'));
  }

}
