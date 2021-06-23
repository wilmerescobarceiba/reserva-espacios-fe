import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRojoComponent } from './boton-rojo.component';

describe('BotonRojoComponent', () => {
  let component: BotonRojoComponent;
  let fixture: ComponentFixture<BotonRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRojoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
