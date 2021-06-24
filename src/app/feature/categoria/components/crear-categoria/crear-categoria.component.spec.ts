import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { CrearCategoriaComponent } from "./crear-categoria.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { CategoriaService } from "../../shared/service/categoria.service";
import { HttpService } from "src/app/core/services/http.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

describe("CrearCategoriaComponent", () => {
  let component: CrearCategoriaComponent;
  let fixture: ComponentFixture<CrearCategoriaComponent>;
  let categoriaService: CategoriaService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearCategoriaComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
        ],
        providers: [CategoriaService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCategoriaComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, "guardar").and.returnValue(of({ valor: 1 }));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("formulario es invalido cuando esta vacio", () => {
    expect(component.categoriaForm.valid).toBeFalsy();
  });

  it("Registrando categoria", () => {
    expect(component.categoriaForm.valid).toBeFalsy();
    component.categoriaForm.controls.codigo.setValue("001");
    component.categoriaForm.controls.nombre.setValue("Categoria test");
    component.categoriaForm.controls.fotografia.setValue("Fotografia test");
    expect(component.categoriaForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
