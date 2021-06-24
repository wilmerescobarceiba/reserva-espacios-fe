export class Categoria {
    id: number;
    codigo: string;
    nombre: string;
    fotografia?: string;

    constructor(id: number, codigo: string, nombre:string, fotografia: string) {
      this.id = id;
      this.codigo = codigo;
      this.nombre = nombre;
      this.fotografia = fotografia;
    }

}
