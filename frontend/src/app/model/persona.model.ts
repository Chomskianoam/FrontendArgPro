export class PersonaModel {
    id?: number;    //Es autogenerado, por eso no está en el constructor
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre:String, apellido:String, img:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}
