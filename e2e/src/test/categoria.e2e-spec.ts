import { NavbarPage } from "../page/navbar/navbar.po";
import { AppPage } from "../app.po";
import { CategoriaPage } from "../page/categoria/categoria.po";

describe("workspace-project Categoria", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let categoria: CategoriaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    categoria = new CategoriaPage();
  });

  it("Deberia crear categoria", () => {
    const CODIGO_CATEGORIA = "001";
    const NOMBRE_CATEGORIA = "Categoria de pruebas";
    const FOTOGRAFIA_CATEGORIA = "Categoria de pruebas";

    page.navigateTo();
    navBar.clickBotonCategorias();
    categoria.clickBotonCrearCategorias();
    categoria.ingresarCodigo(CODIGO_CATEGORIA);
    categoria.ingresarNombre(NOMBRE_CATEGORIA);
    categoria.ingresarFotografia(FOTOGRAFIA_CATEGORIA);

    // Adicionamos las validaciones despues de la creación
    // expect(<>).toEqual(<>);
  });

  it("Deberia listar categorias", async () => {
    page.navigateTo();
    navBar.clickBotonCategorias();
    categoria.clickBotonListarCategorias();
    expect(true).toBe(await categoria.contarCategorias() > 0);
  });
});
