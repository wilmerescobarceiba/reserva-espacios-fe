import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { ListarCategoriaComponent } from "./listar-categoria.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { CategoriaService } from "../../shared/service/categoria.service";
import { Categoria } from "../../shared/model/categoria";
import { HttpService } from "src/app/core/services/http.service";

describe("ListarCategoriaComponent", () => {
  let component: ListarCategoriaComponent;
  let fixture: ComponentFixture<ListarCategoriaComponent>;
  let categoriaService: CategoriaService;
  const listaCategorias: Categoria[] = [
    new Categoria(1, "nit123", "nombre123", "image:base64..."),
    new Categoria(2, "nit223", "nombre223", "image:base64..."),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarCategoriaComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [CategoriaService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCategoriaComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, "consultar").and.returnValue(of(listaCategorias));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.listaCategorias.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
