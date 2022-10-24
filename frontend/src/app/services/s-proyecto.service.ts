import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
/*   proURL = 'https://backend-argpro.herokuapp.com/proy/' */
  URL = environment.URL + 'proy/';

  constructor(private httpClient : HttpClient) { }

  public lista():Observable<Proyecto[]>{ //Experiencia es del tipo array para habilitar más de una
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`); //Tienen que ser estas comillas porque son las que se utilizan para pasar un valor por el patchvalue
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
