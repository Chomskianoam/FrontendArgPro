export class Proyecto {
    id? : number;
    nombreP : string;
    lenguajeP : string;
    descripcionP : string;
    imgP : string;

    constructor(nombreP : string, lenguajeP : string, descripcionP : string, imgP : string){
        this.nombreP = nombreP;
        this.lenguajeP = lenguajeP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
    }
}