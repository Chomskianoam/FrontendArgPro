export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    imgE : string; /*Agregado*/ 

    constructor(nombreE: string, descripcionE: string, imgE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE; /*Agregado*/
    }

}
