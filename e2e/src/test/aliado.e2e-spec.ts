import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AliadoPage } from '../page/aliado/aliado.po';

describe('workspace-project Aliado', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let aliado: AliadoPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    aliado = new AliadoPage();
  });

  it('Deberia crear aliado', () => {
    const ID_ALIADO = '001';
    const DESCRIPCION_ALIADO = 'Aliado de pruebas';

    page.navigateTo();
    navBar.clickBotonAliados();
    aliado.clickBotonCrear();
    aliado.ingresarNit(ID_ALIADO);
    aliado.ingresarNombre(DESCRIPCION_ALIADO);
    aliado.clickBotonCrearFinal();
  });

  it('Deberia listar aliados', async () => {
    page.navigateTo();
    navBar.clickBotonAliados();
    expect(true).toBe(await aliado.contarAliados() > 0);
  });
});
