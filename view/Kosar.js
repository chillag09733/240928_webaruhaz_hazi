import Sor from "./Sor.js";

export default class Kosar{
    #lista = [];
    constructor(lista, szuloElem) {
      console.log(lista);
      this.#lista = lista;
      this.szuloElem = szuloElem;
      this.szuloElem.empty()
      this.tablazatKiir();
      this.tBodyElem = $(".sorok");
      this.sorokLetrehoz();
    }

  sorokLetrehoz() {
    this.#lista.forEach((elem, index) => {
      elem.id = index;
      new Sor(elem, this.tBodyElem);
    });
  }

  tablazatKiir() {
    this.szuloElem.append(` <table class="table table-striped">
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

}