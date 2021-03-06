import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { EspacioService } from '@espacio/shared/service/espacio.service';

import { BorrarEspacioComponent } from './borrar-espacio.component';

describe('BorrarEspacioComponent', () => {
  let component: BorrarEspacioComponent;
  let fixture: ComponentFixture<BorrarEspacioComponent>;
  let espacioService: EspacioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarEspacioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [EspacioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEspacioComponent);
    component = fixture.componentInstance;
    espacioService = TestBed.inject(EspacioService);
    spyOn(espacioService, 'eliminar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
