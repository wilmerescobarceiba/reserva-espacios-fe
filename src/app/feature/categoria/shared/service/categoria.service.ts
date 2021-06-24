import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Respuesta } from '@shared/model/respuesta';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';


@Injectable()
export class CategoriaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Categoria[]>(`${environment.endpoint}/categoria`, this.http.optsName('consultar categorias'));
  }

  public guardar(categoria: Categoria) {
    return this.http.doPost<Categoria, Respuesta>(`${environment.endpoint}/categorias`, categoria,
                                                this.http.optsName('crear categorias'));
  }

  public eliminar(idCategoria: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/categorias/${idCategoria}`,
                                                 this.http.optsName('eliminar categorias'));
  }
}
