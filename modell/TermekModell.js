import { termekLista } from "../termekLista.js";

export default class TermekModell {
  #lista = [];
  // #listaInaktiv=[];
  constructor() {
    this.#lista = termekLista;
  }

  getLista(){
    return this.#lista
    
  }
  // getLista2(){
  //   return this.#listaInaktiv
  // }

  sorTorol(index){
    this.#lista.splice(index,1)

}

// toroltListahozAd(elem){
//   this.#listaInaktiv.push(elem)
// }



}
