import { AliadoService } from '@aliado/shared/service/aliado.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';

import { BorrarAliadoComponent } from './borrar-aliado.component';

describe('BorrarAliadoComponent', () => {
  let component: BorrarAliadoComponent;
  let fixture: ComponentFixture<BorrarAliadoComponent>;
  let aliadoService: AliadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarAliadoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AliadoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAliadoComponent);
    component = fixture.componentInstance;
    aliadoService = TestBed.inject(AliadoService);
    spyOn(aliadoService, 'eliminar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
