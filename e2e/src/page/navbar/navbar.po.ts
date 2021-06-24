import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkAliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonAliados() {
      await this.linkAliado.click();
  }
}
