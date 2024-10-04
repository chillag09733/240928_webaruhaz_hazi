import TermekModell from "../modell/TermekModell.js";
import Kosar from "../view/Kosar.js";
import TermekekPublic from "../view/TermekekPublic.js";

export default class ControllerPublic {
    constructor() {
      this.termekModell = new TermekModell()
      const lista = this.termekModell.getLista()
      
      const kivLista = this.termekModell.getKivLista()
      this.termekekPublic = new TermekekPublic(lista, $(".kepgaleria"), $(".rendelheto"),kivLista,$(".kosar"))
      
      // this.adminInaktivHely=$(".inaktiv")
      // this.adminInaktivHely.empty()
      this.atheyezes()

      this.esemeny()

      this.torlesEsemeny()
      
    }

    atheyezes(){
      $(window).on("athelyez",(event)=>{
        let index=event.detail.id
        this.termekModell.sorTorol(index)
        // this.termekModell.toroltListahozAd(event.detail)
        const lista=this.termekModell.getLista()
       this.termekekPublic= new TermekekPublic(lista, $(".kepgaleria"), $(".rendelheto"))
      //  this.termekekPublic.athelyezettKiir(this.termekModell.getLista2(),this.adminInaktivHely)
      })
    }

    esemeny() {
      $(window).on("kosarba", (event) => {
        this.termekModell.addKivLista(event.detail);
        const kivLista=this.termekModell.getKivLista()
        console.log(kivLista)
        this.termekekPublic.kosarkiir(kivLista)
      });
    }
  
    torlesEsemeny() {
      $(window).on("torles", (event) => {
        console.log(event.detail);
        let melyikreKattintottunk = event.detail.index;
        this.termekModell.torles(melyikreKattintottunk);
        const kivLista = this.termekModell.getKivLista();
        this.termekekPublic.kosarkiir(kivLista)
      });
    }
  }