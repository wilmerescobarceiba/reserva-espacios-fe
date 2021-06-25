export class Espacio {
  id: number;
  codigo: string;
  nombre: string;
  fotografia?: string;
  capacidad: number;
  costo: number;
  descripcion: string;
  idcategoria: number;

  constructor(
    id: number,
    codigo: string,
    nombre: string,
    fotografia: string,
    capacidad: number,
    costo: number,
    descripcion: string,
    idcategoria: number
  ) {
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.fotografia = fotografia;
    this.capacidad = capacidad;
    this.costo = costo;
    this.descripcion = descripcion;
    this.idcategoria = idcategoria;
  }
}
