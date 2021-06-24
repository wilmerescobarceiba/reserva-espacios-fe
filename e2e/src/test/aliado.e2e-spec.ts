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
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Aliado de pruebas';

        page.navigateTo();
        navBar.clickBotonAliados();
        aliado.clickBotonCrearAliados();
        aliado.ingresarNit(ID_PRODUCTO);
        aliado.ingresarNombre(DESCRIPCION_PRODUCTO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar aliados', async() => {
        page.navigateTo();
        navBar.clickBotonAliados();
        aliado.clickBotonListarAliados();
        let totalAliados = await aliado.contarAliados();
        console.warn(totalAliados);

        expect(true).toBe(totalAliados>0);
    });
});
