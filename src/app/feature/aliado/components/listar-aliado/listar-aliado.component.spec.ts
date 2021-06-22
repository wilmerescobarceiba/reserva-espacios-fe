import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAliadoComponent } from './listar-aliado.component';

describe('ListarAliadoComponent', () => {
  let component: ListarAliadoComponent;
  let fixture: ComponentFixture<ListarAliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
