export default class Kartya {
  #obj = {};
  #szuloElem;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kiir();
    this.kepElem = $(".kivalaszt:last");
    this.esemenyKezelo();
  }

  kiir(){
    this.#szuloElem.append(`
      <div class="card kivalaszt col-lg-3 col-md-4 col-sm-6 ">
          <div class="card-body">                 
              <img src="${this.#obj.url}" alt="${this.#obj.cim}" class="card-img-top">
         </div>
      </div>
      `);
  }
}
