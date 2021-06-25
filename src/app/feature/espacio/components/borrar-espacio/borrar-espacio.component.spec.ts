import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEspacioComponent } from './borrar-espacio.component';

describe('BorrarEspacioComponent', () => {
  let component: BorrarEspacioComponent;
  let fixture: ComponentFixture<BorrarEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEspacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
