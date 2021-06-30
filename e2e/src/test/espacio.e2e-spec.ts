import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EspacioPage } from '../page/espacio/espacio.po';
import { browser } from 'protractor';
const path = require('path');
const remote = require('../../../node_modules/selenium-webdriver/remote');
describe('workspace-project Espacio', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let espacio: EspacioPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    espacio = new EspacioPage();
  });

  it('Deberia crear espacio', () => {
    const CODIGO_ESPACIO = '001';
    const NOMBRE_ESPACIO = 'Espacio de pruebas';
    const CAPACIDAD_ESPACIO = 10;
    const COSTO_ESPACIO = 10;
    const DESCRIPCION_ESPACIO = 'Espacio de pruebas';
    const CATEGORIA_ESPACIO = 1;

    browser.setFileDetector(new remote.FileDetector());
    const fileToUpload = '/src/assets/favicon/favicon-DEV.ico';
    const FOTOGRAFIA_ESPACIO = path.resolve(process.cwd() + fileToUpload);

    page.navigateTo();
    navBar.clickBotonEspacios();
    espacio.clickBotonCrear();
    espacio.ingresarCodigo(CODIGO_ESPACIO);
    espacio.ingresarNombre(NOMBRE_ESPACIO);
    espacio.ingresarFotografia(FOTOGRAFIA_ESPACIO);
    espacio.ingresarCapacidad(CAPACIDAD_ESPACIO);
    espacio.ingresarCosto(COSTO_ESPACIO);
    espacio.ingresarDescripcion(DESCRIPCION_ESPACIO);
    espacio.ingresarCategoria(CATEGORIA_ESPACIO);
  });

  it('Deberia listar espacios', async () => {
    page.navigateTo();
    navBar.clickBotonEspacios();
    expect(true).toBe(await espacio.contarEspacios() > 0);
  });
});
