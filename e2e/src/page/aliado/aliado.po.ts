import { by, element } from 'protractor';

export class AliadoPage {
    private linkCrearAliado = element(by.id('linkCrearAliado'));
    private linkListarAliados = element(by.id('linkListarAliado'));
    private inputNitAliado = element(by.id('nitAliado'));
    private inputNombreAliado = element(by.id('nombreAliado'));
    private listaAliados = element.all(by.css('table'));

    async clickBotonCrearAliados() {
        await this.linkCrearAliado.click();
    }

    async clickBotonListarAliados() {
        await this.linkListarAliados.click();
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
