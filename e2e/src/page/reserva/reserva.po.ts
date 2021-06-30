import { by, element } from 'protractor';

export class ReservaPage {
  private btnCrearReserva = element(by.id('btnCrear'));
  private inputFechaReserva = element(by.id('fechaReserva'));
  private inputIdAliadoReserva = element(by.id('aliadoReserva'));
  private inputIdEspacioReserva = element(by.id('espacioReserva'));
  private inputIdHorarioReserva = element(by.id('horarioReserva'));
  private listaReservas = element.all(by.css('table'));

  async clickBotonCrear() {
    await this.btnCrearReserva.click();
  }

  async ingresarFecha(fechaReserva) {
    await this.inputFechaReserva.sendKeys(fechaReserva);
  }

  async ingresarIdAliadoReserva(idAliadoReserva) {
    await this.inputIdAliadoReserva.sendKeys(idAliadoReserva);
  }

  async ingresarIdEspacioReserva(idEspacioReserva) {
    await this.inputIdEspacioReserva.sendKeys(idEspacioReserva);
  }
  async ingresarIdHorarioReserva(idHorarioReserva) {
    await this.inputIdHorarioReserva.sendKeys(idHorarioReserva);
  }

  async contarReservas() {
    return this.listaReservas.count();
  }
}
