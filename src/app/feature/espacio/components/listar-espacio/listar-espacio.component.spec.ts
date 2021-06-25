import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspacioComponent } from './listar-espacio.component';

describe('ListarEspacioComponent', () => {
  let component: ListarEspacioComponent;
  let fixture: ComponentFixture<ListarEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEspacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
