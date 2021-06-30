import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CategoriaPage } from '../page/categoria/categoria.po';
import { browser } from 'protractor';
const path = require('path');
const remote = require('../../../node_modules/selenium-webdriver/remote');

describe('workspace-project Categoria', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let categoria: CategoriaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    categoria = new CategoriaPage();
  });

  it('Deberia crear categoria', () => {
    const CODIGO_CATEGORIA = '001';
    const NOMBRE_CATEGORIA = 'Categoria de pruebas';

    browser.setFileDetector(new remote.FileDetector());
    const fileToUpload = '/src/assets/favicon/favicon-DEV.ico';
    const FOTOGRAFIA_CATEGORIA = path.resolve(process.cwd() + fileToUpload);

    page.navigateTo();
    navBar.clickBotonCategorias();
    categoria.clickBotonCrear();
    categoria.ingresarCodigo(CODIGO_CATEGORIA);
    categoria.ingresarNombre(NOMBRE_CATEGORIA);
    categoria.ingresarFotografia(FOTOGRAFIA_CATEGORIA);
  });

  it('Deberia listar categorias', async () => {
    page.navigateTo();
    navBar.clickBotonCategorias();
    expect(true).toBe(await categoria.contarCategorias() > 0);
  });
});
