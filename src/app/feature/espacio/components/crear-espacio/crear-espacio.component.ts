import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EspacioService } from '../../shared/service/espacio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { Categoria } from '@categoria/shared/model/categoria';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-espacio',
  templateUrl: './crear-espacio.component.html',
})
export class CrearEspacioComponent implements OnInit {
  espacioForm: FormGroup;
  modalVisible: boolean;

  public listaCategorias: Observable<Categoria[]>;

  @Output()
  creacionExitosa = new EventEmitter();

  constructor(
    protected espacioServices: EspacioService,
    protected categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.construirFormularioEspacio();
    this.getCategorias();
  }

  getCategorias = () => {
    this.listaCategorias = this.categoriaService.consultar();
  }

  abrirModal = () => {
    this.modalVisible = true;
  }

  cerrarModal = () => {
    this.espacioForm.reset();
    this.modalVisible = false;
  }

  private construirFormularioEspacio() {
    this.espacioForm = new FormGroup({
      codigo: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      fotografia: new FormControl('', []),
      fotografiaUpload: new FormControl(null, [Validators.required]),
      capacidad: new FormControl(null, [Validators.required, Validators.min(0)]),
      costo: new FormControl(null, [Validators.required, Validators.min(0)]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      idcategoria: new FormControl(null, [Validators.required]),
    });
  }

  crear = () => {
    if (this.espacioForm.valid) {
      this.espacioServices.guardar(this.espacioForm.value).subscribe(
        () => {
          this.cerrarModal();
          this.creacionExitosa.emit();
        },
        (e) => {
          if (e.error && e.error.mensaje) {
            alert(e.error.mensaje);
          } else {
            alert(e);
          }
        }
      );
    }
  }

  handleUpload(event) {
    const file2 = event.target.files[0];
    const reader2 = new FileReader();
    reader2.readAsDataURL(file2);
    reader2.onload = () => {
      this.espacioForm.controls.fotografia.setValue(reader2.result);
    };
  }
}
