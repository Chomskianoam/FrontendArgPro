import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  /* educURL = 'https://backend-argpro.herokuapp.com/educ/' */
  URL = environment.URL + 'educ/';


  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Educacion[]>{ //Experiencia es del tipo array para habilitar más de una
    return this.httpClient.get<Educacion[]>(this.URL  + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL  + `detail/${id}`); //Tienen que ser estas comillas porque son las que se utilizan para pasar un valor por el patchvalue
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.URL  + 'create', educacion);
  }

  public update(id: number, educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.URL  + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL  + `delete/${id}`);
  }

}
