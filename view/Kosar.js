export default class Kosar {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.kosarElemLetrehoz();
  }

  kosarElemLetrehoz() {
    this.szuloElem.empty();
    if (this.#lista.length === 0) {
      this.szuloElem.append(`<p>🛒 Your cart is empty</p>`);
    } else {
      this.#lista.forEach((elem) => {
        this.szuloElem.append(`<div class="cart">
  <img src="${elem.image}" alt="${elem.title}" class="cart-img">
  <div class="cart-content">
    <p class="cart-text">${elem.title}</p>
  </div>
  <button class="delete-btn">Delete</button>
</div>`);
      });

      this.torlesEsemenyKezelo()
    }
  }

  torlesEsemenyKezelo() {
    this.szuloElem.find(".delete-btn:last").on("click", (event) => {
      const e = new CustomEvent("torles", { detail: this.#lista });
      window.dispatchEvent(e);
    });
  }
}
