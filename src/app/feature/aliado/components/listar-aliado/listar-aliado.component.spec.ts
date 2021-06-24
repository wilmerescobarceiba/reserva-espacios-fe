import { Aliado } from "@aliado/shared/model/aliado";
import { AliadoService } from "@aliado/shared/service/aliado.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { of } from "rxjs";

import { ListarAliadoComponent } from "./listar-aliado.component";

describe("ListarAliadoComponent", () => {
  let component: ListarAliadoComponent;
  let fixture: ComponentFixture<ListarAliadoComponent>;
  let aliadoService: AliadoService;
  const listaAliados: Aliado[] = [
    new Aliado(1, "nit123", "nombre123"),
    new Aliado(2, "nit223", "nombre223"),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarAliadoComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [AliadoService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAliadoComponent);
    component = fixture.componentInstance;
    aliadoService = TestBed.inject(AliadoService);
    spyOn(aliadoService, "consultar").and.returnValue(of(listaAliados));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.listaAliados.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
