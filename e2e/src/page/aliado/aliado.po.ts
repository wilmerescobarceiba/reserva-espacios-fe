import { by, element } from 'protractor';

export class AliadoPage {
    private btnCrearAliado = element(by.id('btnCrear'));
    private btnCrearAliadoFinal = element(by.id('btnCrearFinal'));
    private inputNitAliado = element(by.id('nitAliado'));
    private inputNombreAliado = element(by.id('nombreAliado'));
    private listaAliados = element.all(by.css('table'));

    async clickBotonCrear() {
      await this.btnCrearAliado.click();
    }

    async clickBotonCrearFinal() {
      await this.btnCrearAliadoFinal.click();
    }

    async ingresarNit(nitAliado) {
        await this.inputNitAliado.sendKeys(nitAliado);
    }

    async ingresarNombre(nombreAliado) {
        await this.inputNombreAliado.sendKeys(nombreAliado);
    }

    async contarAliados() {
        return this.listaAliados.count();
    }
}
