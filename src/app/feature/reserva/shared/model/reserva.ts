export class Reserva {
  id: number;
  idaliado: number;
  idespacio: number;
  idhorario: number;
  fecha: string;
  costototal: number;

  constructor(
    id: number,
    idaliado: number,
    idespacio: number,
    idhorario: number,
    fecha: string,
    costototal: number
  ) {
    this.id = id;
    this.idaliado = idaliado;
    this.idespacio = idespacio;
    this.idhorario = idhorario;
    this.fecha = fecha;
    this.costototal = costototal;
  }
}
