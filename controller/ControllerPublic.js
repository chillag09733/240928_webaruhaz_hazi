import TermekModell from "../modell/TermekModell.js";
import TermekekPublic from "../view/TermekekPublic.js";

export default class ControllerPublic {
    constructor() {
      this.termekModell = new TermekModell()
      const lista = this.termekModell.getLista()
      this.termekekPublic = new TermekekPublic(lista, $(".kepgaleria"), $(".rendelheto"))
      // this.adminInaktivHely=$(".inaktiv")
      // this.adminInaktivHely.empty()
      this.atheyezes()
      
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
  }