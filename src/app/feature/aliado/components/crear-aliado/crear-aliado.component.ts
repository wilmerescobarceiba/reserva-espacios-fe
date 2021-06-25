import { AliadoService } from "@aliado/shared/service/aliado.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 50;

@Component({
  selector: "app-crear-aliado",
  templateUrl: "./crear-aliado.component.html"
})
export class CrearAliadoComponent implements OnInit {
  modalVisible: boolean;
  aliadoForm: FormGroup;

  @Output()
  creacionExitosa = new EventEmitter();

  constructor(protected aliadoService: AliadoService) {}

  ngOnInit(): void {
    this.construirFormularioCategoria();
  }

  abrirModal = () => {
    this.modalVisible = true;
  };

  cerrarModal = () => {
    this.modalVisible = false;
  };

  private construirFormularioCategoria = () => {
    this.aliadoForm = new FormGroup({
      nit: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
    });
  };

  crear = () => {
    if (this.aliadoForm.valid) {
      this.aliadoService.guardar(this.aliadoForm.value).subscribe(
        (respuesta) => {
          console.warn(respuesta);
          this.cerrarModal();
          this.creacionExitosa.emit();
        },
        (error) => {
          console.warn(error);
          this.cerrarModal();
        }
      );
    }
  };
}
