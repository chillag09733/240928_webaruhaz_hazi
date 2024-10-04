export default class Kosar {
  #elem;
  constructor(elem, szuloElem, index) {
    this.#elem= elem;
    this.szuloElem = szuloElem;
    this.kosarElemLetrehoz(index);
    this.torlesEsemenyKezelo()
  }

  kosarElemLetrehoz() {
        this.szuloElem.append(`<div class="cart">
  <img src="${this.#elem.image}" alt="${this.#elem.title}" class="cart-img">
  <div class="cart-content">
    <p class="cart-text">${this.#elem.title}</p>
  </div>
  <button class="delete-btn">Delete</button>
</div>`);
    }
  

  torlesEsemenyKezelo() {
    this.szuloElem.find(".delete-btn:last").on("click", (event) => {
      const e = new CustomEvent("torles", { detail:this.#elem});
      window.dispatchEvent(e);
    });
  }
}