import { by, element } from 'protractor';

export class CategoriaPage {
    private btnCrearCategoria = element(by.id('btnCrear'));
    private inputCodigoCategoria = element(by.id('codigoCategoria'));
    private inputNombreCategoria = element(by.id('nombreCategoria'));
    private inputFotografiaCategoria = element(by.id('fotografiaUploadCategoria'));
    private listaCategorias = element.all(by.css('table'));

    async clickBotonCrear() {
      await this.btnCrearCategoria.click();
    }

    async ingresarCodigo(codigoCategoria) {
        await this.inputCodigoCategoria.sendKeys(codigoCategoria);
    }

    async ingresarNombre(nombreCategoria) {
        await this.inputNombreCategoria.sendKeys(nombreCategoria);
    }

    async ingresarFotografia(fotografiaCategoria) {
      await this.inputFotografiaCategoria.sendKeys(fotografiaCategoria);
  }

    async contarCategorias() {
        return this.listaCategorias.count();
    }
}
