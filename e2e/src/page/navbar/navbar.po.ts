import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkAliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCategoria = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkEspacio = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));

    async clickBotonCategorias() {
        await this.linkCategoria.click();
    }

    async clickBotonAliados() {
      await this.linkAliado.click();
    }

    async clickBotonEspacios() {
      await this.linkEspacio.click();
    }

    async clickBotonReservas() {
      await this.linkReserva.click();
    }
}
