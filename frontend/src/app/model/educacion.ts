export class Educacion {
    id? : number;
    nombreEd : string;
    tituloEd : string;
    yearEd : string;
    imgEd : string; 

    constructor(nombreEd: string, tituloEd: string, yearEd:string, imgEd: string){
        this.nombreEd = nombreEd;
        this.tituloEd = tituloEd;
        this.yearEd = yearEd;
        this.imgEd = imgEd; 
    }

}
