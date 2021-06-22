import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAliadoComponent } from './crear-aliado.component';

describe('CrearAliadoComponent', () => {
  let component: CrearAliadoComponent;
  let fixture: ComponentFixture<CrearAliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
