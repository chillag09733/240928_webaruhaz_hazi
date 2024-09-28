import Kartya from "./Kartya.js";

export default class TermekekPublic{
  #lista = []
  #taroloElem
    constructor(lista, taroloElem) {
      this.#lista = lista
      this.#taroloElem = taroloElem
      this.#taroloElem.empty()
      this.kiir()
    }

    kiir(){
      this.#lista.forEach((elem) => {
        new Kartya(elem, this.#taroloElem)
      })
    }
  }