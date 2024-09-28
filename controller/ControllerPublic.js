import TermekModell from "../modell/TermekModell.js";
import TermekekPublic from "../view/TermekekPublic.js";

export default class ControllerPublic {
    constructor() {
      this.termekModell = new TermekModell()
      const lista = this.termekModell.getLista()
      this.termekekPublic = new TermekekPublic(lista, $(".kepgaleria"))
    }
  }