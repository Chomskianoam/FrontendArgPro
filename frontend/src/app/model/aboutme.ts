export class Aboutme{
    id?: number;
    nombreD: string;
    ubicacionD: string;
    puestoD: string;
    infoD: string;
    infosD: string;
    imgfondoD: string;
    imgperfilD: string;

    constructor(nombreD: string, ubicacionD: string, puestoD: string, infoD: string, infosD: string, imgfondoD: string, imgperfilD: string){
        this.nombreD = nombreD;
        this.ubicacionD = ubicacionD;
        this.puestoD = puestoD;
        this.infoD = infoD;
        this.infosD = infosD;
        this.imgfondoD = imgfondoD;
        this.imgperfilD = imgperfilD;
    }
}