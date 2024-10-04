import TermekModell from "../modell/TermekModell.js";
import Kosar from "../view/Kosar.js";
import TermekekPublic from "../view/TermekekPublic.js";

export default class ControllerPublic {
  constructor() {
    this.termekModell = new TermekModell();
    const lista = this.termekModell.getLista();

    const kivLista = this.termekModell.getKivLista();
    this.termekekPublic = new TermekekPublic(
      lista,
      $(".kepgaleria"),
      $(".rendelheto"),
      kivLista,
      $(".kosar")
    );
    this.listaSorTorol();

    this.esemeny();

    this.torlesEsemeny();
  }

  listaSorTorol() {
    $(window).on("deactivate", (event) => {
      let index = event.detail.id;
      this.termekModell.sorTorol(index);
      const lista = this.termekModell.getLista();
      this.termekekPublic = new TermekekPublic(
        lista,
        $(".kepgaleria"),
        $(".rendelheto")
      );
    });
  }

  esemeny() {
    $(window).on("kosarba", (event) => {
      this.termekModell.addKivLista(event.detail);
      const kivLista = this.termekModell.getKivLista();
      this.termekekPublic.kosarkiir(kivLista);
    });
  }

  torlesEsemeny() {
    $(window).on("torles", (event) => {
      let melyikreKattintottunk = event.detail.index;
      this.termekModell.torles(melyikreKattintottunk);
      const kivLista = this.termekModell.getKivLista();
      this.termekekPublic.kosarkiir(kivLista);
    });
  }
}
