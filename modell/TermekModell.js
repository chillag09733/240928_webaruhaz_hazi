import { termekLista } from "../termekLista.js";

export default class TermekModell {
  #lista = [];
  // #listaInaktiv=[];
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

  getKivLista(){
    return this.kivalasztottLista
  }
  // getLista2(){
  //   return this.#listaInaktiv
  // }

  sorTorol(index) {
    this.#lista.splice(index, 1);
  }

  // toroltListahozAd(elem){
  //   this.#listaInaktiv.push(elem)
  // }
}
