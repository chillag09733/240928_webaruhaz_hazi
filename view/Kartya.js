export default class Kartya {
  #obj = {};
  #szuloElem;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kiir();
    this.gombElem = $(".gomb:last");
    this.esemenyKezelo();
 
  }

  kiir() {
    this.#szuloElem.append(`
<div class="card" style="width: 18rem;">
  <img src="${this.#obj.image}" class="card-img-top" alt="${this.#obj.title}">
  <div class="card-body">
    <h5 class="card-title">${this.#obj.title}</h5>
    <p class="card-text">${this.#obj.description}</p>
     <button class = "gomb">Add to cart</button>
  </div>
</div>`);
  }

  esemenyKezelo() {
    this.gombElem.on("click", (event) => {
      const e = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(e);
    });
  }
  
}
