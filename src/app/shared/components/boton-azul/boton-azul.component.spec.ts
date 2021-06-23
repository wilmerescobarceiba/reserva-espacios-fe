import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPrimarioComponent } from './boton-azul.component';

describe('BotonPrimarioComponent', () => {
  let component: BotonPrimarioComponent;
  let fixture: ComponentFixture<BotonPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPrimarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
