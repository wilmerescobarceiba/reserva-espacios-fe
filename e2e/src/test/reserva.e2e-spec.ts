import { NavbarPage } from "../page/navbar/navbar.po";
import { AppPage } from "../app.po";
import { ReservaPage } from "../page/reserva/reserva.po";

describe("workspace-project Reserva", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let reserva: ReservaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    reserva = new ReservaPage();
  });

  it("Deberia crear reserva", () => {
    //const FECHA_RESERVA = "2021-06-28";
    const FECHA_RESERVA = "06/28/2021";
    const ID_ALIADO_RESERVA = 1;
    const ID_ESPACIO_RESERVA = 1;
    const ID_HORARIO_RESERVA = 1;

    page.navigateTo();
    navBar.clickBotonReservas();
    reserva.clickBotonCrear();
    reserva.ingresarFecha(FECHA_RESERVA);
    reserva.ingresarIdAliadoReserva(ID_ALIADO_RESERVA);
    reserva.ingresarIdEspacioReserva(ID_ESPACIO_RESERVA);
    reserva.ingresarIdHorarioReserva(ID_HORARIO_RESERVA);

    // Adicionamos las validaciones despues de la creación
    // expect(<>).toEqual(<>);
  });

  it("Deberia listar reservas", async () => {
    page.navigateTo();
    navBar.clickBotonReservas();
    expect(true).toBe(await reserva.contarReservas() > 0);
  });
});
