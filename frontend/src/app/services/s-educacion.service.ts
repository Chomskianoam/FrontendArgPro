import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  educURL = 'https://backend-argpro.herokuapp.com/educ/'


  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Educacion[]>{ //Experiencia es del tipo array para habilitar más de una
    return this.httpClient.get<Educacion[]>(this.educURL  + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.educURL  + `detail/${id}`); //Tienen que ser estas comillas porque son las que se utilizan para pasar un valor por el patchvalue
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.educURL  + 'create', educacion);
  }

  public update(id: number, educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.educURL  + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.educURL  + `delete/${id}`);
  }

}
