import { by, element } from 'protractor';

export class CategoriaPage {
    private linkCrearCategoria = element(by.id('linkCrearCategoria'));
    private linkListarCategorias = element(by.id('linkListarCategoria'));
    private inputCodigoCategoria = element(by.id('codigoCategoria'));
    private inputNombreCategoria = element(by.id('nombreCategoria'));
    private inputFotografiaCategoria = element(by.id('categoriaCategoria'));
    private listaCategorias = element.all(by.css('table'));

    async clickBotonCrearCategorias() {
        await this.linkCrearCategoria.click();
    }

    async clickBotonListarCategorias() {
        await this.linkListarCategorias.click();
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
