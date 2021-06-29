import { by, element } from 'protractor';

export class EspacioPage {
    private btnCrearEspacio = element(by.id('btnCrear'));
    private inputCodigoEspacio = element(by.id('codigoEspacio'));
    private inputNombreEspacio = element(by.id('nombreEspacio'));
    private inputFotografiaEspacio = element(by.id('fotografiaEspacio'));
    private inputCapacidadEspacio = element(by.id('capacidadEspacio'));
    private inputCostoEspacio = element(by.id('costoEspacio'));
    private inputDescripcionEspacio = element(by.id('descripcionEspacio'));
    private inputCategoriaEspacio = element(by.id('categoriaEspacio'));
    private listaEspacios = element.all(by.css('table'));

    async clickBotonCrear() {
      await this.btnCrearEspacio.click();
    }

    async ingresarCodigo(codigoEspacio) {
        await this.inputCodigoEspacio.sendKeys(codigoEspacio);
    }

    async ingresarNombre(nombreEspacio) {
        await this.inputNombreEspacio.sendKeys(nombreEspacio);
    }

    async ingresarFotografia(fotografiaEspacio) {
      await this.inputFotografiaEspacio.sendKeys(fotografiaEspacio);
    }

    async ingresarCapacidad(capacidadEspacio) {
      await this.inputCapacidadEspacio.sendKeys(capacidadEspacio);
    }

    async ingresarCosto(costoEspacio) {
      await this.inputCostoEspacio.sendKeys(costoEspacio);
    }

    async ingresarDescripcion(descripcionEspacio) {
      await this.inputDescripcionEspacio.sendKeys(descripcionEspacio);
    }

    async ingresarCategoria(categoriaEspacio) {
      await this.inputCategoriaEspacio.sendKeys(categoriaEspacio);
    }

    async contarEspacios() {
        return this.listaEspacios.count();
    }
}
