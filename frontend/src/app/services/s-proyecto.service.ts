import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  proURL = 'http://localhost:8080/proy/'

  constructor(private httpClient : HttpClient) { }

  public lista():Observable<Proyecto[]>{ //Experiencia es del tipo array para habilitar más de una
    return this.httpClient.get<Proyecto[]>(this.proURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proURL + `detail/${id}`); //Tienen que ser estas comillas porque son las que se utilizan para pasar un valor por el patchvalue
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.proURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
  }


}
