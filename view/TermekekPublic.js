import Kartya from "./Kartya.js";
import Kosar from "./Kosar.js";
import Sor from "./Sor.js";

export default class TermekekPublic {
  #lista = [];
  #taroloElem;
  #kosarLista = [];
  constructor(lista, taroloElem, SzuloElemAdmin, kosarLista, kosarSzuloElem) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.#taroloElem.empty();
    this.SzuloElemAdmin = SzuloElemAdmin;
    this.SzuloElemAdmin.empty();
    this.tablazatLetrehoz();
    this.tBodyElem = $(".sorok");
    this.kiir();
    this.#kosarLista = kosarLista;
    this.kosarSzuloElem = kosarSzuloElem;
    this.kosarkiir();
  }

  kiir() {
    this.#lista.forEach((elem, index) => {
      new Kartya(elem, this.#taroloElem);
      elem.id = index;
      new Sor(elem, this.tBodyElem);
    });
  }

  tablazatLetrehoz() {
    this.SzuloElemAdmin.append(` <table class="table table-striped">
        <thead>
        <tr>
            <th>Picture</th>
            <th>Product</th>
            <th>Info</th>
            <th></th>
        </tr>
        </thead>
        <tbody class="sorok">
        </tbody>
</table>`);
  }

  kosarkiir() {
    if (!this.kosarSzuloElem) {
      return;
  }
    this.kosarSzuloElem.empty();
    if (this.#kosarLista.length === 0) {
      this.kosarSzuloElem.append(`<h2 class="cart">🛒 Your cart is empty</h2>`);
    } else {
      this.#kosarLista.forEach((elem, index) => {
        elem.index = index;
        new Kosar(elem, this.kosarSzuloElem);
      });
    }
  }
}
