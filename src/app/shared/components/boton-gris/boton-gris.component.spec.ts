import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGrisComponent } from './boton-gris.component';

describe('BotonGrisComponent', () => {
  let component: BotonGrisComponent;
  let fixture: ComponentFixture<BotonGrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonGrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonGrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
