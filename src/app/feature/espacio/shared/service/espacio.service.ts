import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Respuesta } from '@shared/model/respuesta';
import { environment } from 'src/environments/environment';
import { Espacio } from '../model/espacio';


@Injectable()
export class EspacioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Espacio[]>(`${environment.endpoint}/espacio`, this.http.optsName('consultar espacios'));
  }

  public guardar(espacio: Espacio) {
    return this.http.doPost<Espacio, Respuesta>(`${environment.endpoint}/espacios`, espacio,
                                                this.http.optsName('crear espacios'));
  }

  public eliminar(idEspacio: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/espacios/${idEspacio}`,
                                                 this.http.optsName('eliminar espacios'));
  }
}
