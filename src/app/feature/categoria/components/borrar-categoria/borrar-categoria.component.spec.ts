import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BorrarCategoriaComponent } from './borrar-categoria.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { HttpService } from '@core/services/http.service';

describe('BorrarCategoriaComponent', () => {
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
    spyOn(categoriaService, 'eliminar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
