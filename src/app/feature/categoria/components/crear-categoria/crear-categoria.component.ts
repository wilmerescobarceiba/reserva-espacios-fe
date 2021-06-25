import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CategoriaService } from "../../shared/service/categoria.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: "app-crear-categoria",
  templateUrl: "./crear-categoria.component.html"
})
export class CrearCategoriaComponent implements OnInit {
  categoriaForm: FormGroup;
  modalVisible: boolean;

  @Output()
  creacionExitosa = new EventEmitter();

  constructor(protected categoriaServices: CategoriaService) {}

  ngOnInit() {
    this.construirFormularioCategoria();
  }

  abrirModal = () => {
    this.modalVisible = true;
  };

  cerrarModal = () => {
    this.categoriaForm.reset();
    this.modalVisible = false;
  };

  private construirFormularioCategoria() {
    this.categoriaForm = new FormGroup({
      codigo: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      fotografia: new FormControl("", []),
      fotografiaUpload: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  crear = () => {
    if (this.categoriaForm.valid) {
      this.categoriaServices.guardar(this.categoriaForm.value).subscribe(
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

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.categoriaForm.controls.fotografia.setValue(reader.result);
    };
  }
}
