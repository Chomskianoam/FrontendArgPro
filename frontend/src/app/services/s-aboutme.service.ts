import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aboutme } from '../model/aboutme';

@Injectable({
  providedIn: 'root'
})
export class SAboutmeService {
  /* aboutURL = 'https://backend-argpro.herokuapp.com/about/' */
  URL = environment.URL + 'about/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Aboutme[]>{ //Experiencia es del tipo array para habilitar más de una
    return this.httpClient.get<Aboutme[]>(this.URL  + 'lista');
  }

  public detail(id: number): Observable<Aboutme>{
    return this.httpClient.get<Aboutme>(this.URL  + `detail/${id}`); //Tienen que ser estas comillas porque son las que se utilizan para pasar un valor por el patchvalue
  }

  public save(aboutme: Aboutme):Observable<any>{
    return this.httpClient.post<any>(this.URL  + 'create', aboutme);
  }

  public update(id: number, aboutme: Aboutme):Observable<any>{
    return this.httpClient.put<any>(this.URL  + `update/${id}`, aboutme);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL  + `delete/${id}`);
  }
}
