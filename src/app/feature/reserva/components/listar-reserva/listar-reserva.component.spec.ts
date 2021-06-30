import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { of } from 'rxjs';

import { ListarReservaComponent } from './listar-reserva.component';

describe('ListarReservaComponent', () => {
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let reservaService: ReservaService;

  const listaReservas: Reserva[] = [
    new Reserva(1, 1, 1, 1, '2021-06-25', 0),
    new Reserva(2, 2, 2, 2, '2021-06-25', 0),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarReservaComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [ReservaService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'consultar').and.returnValue(of(listaReservas));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaReservas.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
