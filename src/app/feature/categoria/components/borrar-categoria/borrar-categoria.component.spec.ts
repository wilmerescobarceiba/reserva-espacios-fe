import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BorrarCategoriaComponent } from "./borrar-categoria.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CategoriaService } from "@categoria/shared/service/categoria.service";
import { HttpService } from "@core/services/http.service";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("BorrarCategoriaComponent", () => {
  let component: BorrarCategoriaComponent;
  let fixture: ComponentFixture<BorrarCategoriaComponent>;
  let categoriaService: CategoriaService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BorrarCategoriaComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [CategoriaService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCategoriaComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, "eliminar");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Llamado al metodo borrar del componente", () => {
    spyOn(component, 'borrar');
    let submitButton: DebugElement = fixture.debugElement.query(By.css('.btn-test'));
    submitButton.triggerEventHandler('click',null);
    expect(component.borrar).toHaveBeenCalledTimes(1);
  });

});
