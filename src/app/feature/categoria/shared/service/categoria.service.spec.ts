import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriaService } from './categoria.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Categoria } from '../model/categoria';
import { HttpResponse } from '@angular/common/http';
import { Respuesta } from '@shared/model/respuesta';

describe('CategoriaService', () => {
  let httpMock: HttpTestingController;
  let service: CategoriaService;
  const apiEndpointCategoriaConsulta = `${environment.endpoint}/categoria`;
  const apiEndpointCategorias = `${environment.endpoint}/categorias`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    const productService: CategoriaService = TestBed.inject(CategoriaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar categorias', () => {
    const dummyCategorias = [
      new Categoria(1, 'Categoria 1','Categoria 1','Categoria 1'), new Categoria(2, 'Categoria 2', 'Categoria 2', 'Categoria 2')
    ];
    service.consultar().subscribe(categorias => {
      expect(categorias.length).toBe(2);
      expect(categorias).toEqual(dummyCategorias);
    });
    const req = httpMock.expectOne(apiEndpointCategoriaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategorias);
  });

  it('deberia crear una categoria', () => {
    const dummyCategoria = new Categoria(3, 'Categoria 1','Categoria 1','Categoria 1');
    service.guardar(dummyCategoria).subscribe((respuesta) => {
      expect(respuesta).toEqual({'valor':3});
    });
    const req = httpMock.expectOne(apiEndpointCategorias);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Respuesta>({body: {'valor':3}}));
  });

  it('deberia eliminar un categoria', () => {
    const dummyCategoria = new Categoria(1, 'Categoria 1','Categoria 1','Categoria 1');
    service.eliminar(dummyCategoria.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCategorias}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
