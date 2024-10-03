export default class Sor {
  #adat = {};

  constructor(adat, szuloElem) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    this.sorLetrehoz();
    this.kukaElem = $(".torol:last");
    this.athelyezEsemeny();
  }

  sorLetrehoz() {
    this.szuloElem.append(
      `<tr>
                  <td><img src="${this.#adat.image}" alt="${
        this.#adat.title
      }"></td>
                  <td>${this.#adat.title}</td>
                  <td>${this.#adat.description}</td>
                  <td class="torol"><button class="gomb">Deactivate</button></td>
                   </tr>`
    );
  }

  athelyezEsemeny() {
    this.kukaElem.on("click", () => {
      const e = new CustomEvent("athelyez", { detail: this.#adat });
      window.dispatchEvent(e);
    });
  }
}
