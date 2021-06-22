import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAliadoComponent } from './borrar-aliado.component';

describe('BorrarAliadoComponent', () => {
  let component: BorrarAliadoComponent;
  let fixture: ComponentFixture<BorrarAliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarAliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
