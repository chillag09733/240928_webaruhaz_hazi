import { termekLista } from "../termekLista.js";

export default class TermekModell {
  #lista = [];
  constructor() {
    this.#lista = termekLista;
  }

  getLista(){
    return this.#lista
  }
}
