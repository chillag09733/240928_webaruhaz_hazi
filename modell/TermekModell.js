import { termekLista } from "../termekLista.js";

export default class TermekModell {
  #lista = [];
  constructor() {
    this.#lista = termekLista;
    this.kivalasztottLista = [];
  }

  getLista() {
    return this.#lista;
  }

  addKivLista(termek) {
    this.kivalasztottLista.push(termek);
  }

  getKivLista() {
    return this.kivalasztottLista;
  }

  torles(index) {
    this.kivalasztottLista.splice(index, 1);
  }

  sorTorol(index) {
    this.#lista.splice(index, 1);
  }
}
