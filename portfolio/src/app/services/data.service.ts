import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) { }

obtenerDatos():Observable<any>{
  return this.http.get('./assets/data/data.json'); //Acá tiene que ir la URL con la cual nos vamos a comunicar y enviar una request para obtener los datos.
}

}
