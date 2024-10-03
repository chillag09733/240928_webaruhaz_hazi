import Kartya from "./Kartya.js";
import Sor from "./Sor.js";

export default class TermekekPublic{
  #lista = []
  #taroloElem
    constructor(lista, taroloElem, SzuloElemAdmin) {
      this.#lista = lista
      this.#taroloElem = taroloElem
      this.#taroloElem.empty()
      this.SzuloElemAdmin=SzuloElemAdmin
      this.SzuloElemAdmin.empty()
      this.tablazatLetrehoz()
      this.tBodyElem=$(".sorok")
      this.kiir()
     
      
    }

    kiir(){
      this.#lista.forEach((elem, index) => {
        new Kartya(elem, this.#taroloElem)
        elem.id=index
        new Sor(elem,this.tBodyElem)
        //new Sor(elem, this.kosarElem)
      })
    }


    // athelyezettKiir(lista,htmlElem){
    //   lista.forEach(element => {
    //     new Sor(element,htmlElem)
        
    //   });
    // }
  

  tablazatLetrehoz(){
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
</table>`)
  }}