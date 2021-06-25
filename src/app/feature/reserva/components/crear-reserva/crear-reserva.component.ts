import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ReservaService } from "../../shared/service/reserva.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Aliado } from "@aliado/shared/model/aliado";
import { Espacio } from "@espacio/shared/model/espacio";
import { Horario } from "@horario/shared/model/horario";
import { AliadoService } from "@aliado/shared/service/aliado.service";
import { EspacioService } from "@espacio/shared/service/espacio.service";
import { HorarioService } from "@horario/shared/service/horario.service";


@Component({
  selector: "app-crear-reserva",
  templateUrl: "./crear-reserva.component.html",
})
export class CrearReservaComponent implements OnInit {
  reservaForm: FormGroup;
  modalVisible: boolean;

  public listaAliados: Observable<Aliado[]>;
  public listaEspacios: Observable<Espacio[]>;
  public listaHorarios: Observable<Horario[]>;

  @Output()
  creacionExitosa = new EventEmitter();

  constructor(
    protected reservaServices: ReservaService,
    protected aliadoService: AliadoService,
    protected espacioService: EspacioService,
    protected horarioService: HorarioService
  ) {}

  ngOnInit() {
    this.construirFormularioReserva();
    this.getAliados();
    this.getEspacios();
    this.getHorarios();
  }

  getAliados = () => {
    this.listaAliados = this.aliadoService.consultar();
  };

  getEspacios = () => {
    this.listaEspacios = this.espacioService.consultar();
  };

  getHorarios = () => {
    this.listaHorarios = this.horarioService.consultar();
  };

  abrirModal = () => {
    this.modalVisible = true;
  };

  cerrarModal = () => {
    this.reservaForm.reset();
    this.modalVisible = false;
  };

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      idaliado: new FormControl(null, [
        Validators.required
      ]),
      idespacio: new FormControl(null, [
        Validators.required
      ]),
      idhorario: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ])
    });
  }

  crear = () => {
    if (this.reservaForm.valid) {
      this.reservaServices.guardar(this.reservaForm.value).subscribe(
        () => {
          this.cerrarModal();
          this.creacionExitosa.emit();
        },
        (e) => {
          if(e['error'] &&  e['error']['mensaje']) alert(e['error']['mensaje']);
          else alert(e);
        }
      );
    }
  };

  handleUpload(event) {
    const file3 = event.target.files[0];
    const reader3 = new FileReader();
    reader3.readAsDataURL(file3);
    reader3.onload = () => {
      this.reservaForm.controls.fotografia.setValue(reader3.result);
    };
  }
}
