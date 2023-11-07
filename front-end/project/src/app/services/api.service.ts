import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  UrlBase = 'http://127.0.0.1:8000/'
  httpFeaders = new HttpHeaders({'Content-type' : 'aplication/json'})
  constructor(private http: HttpClient) {} 

   getAllNotas() : Observable<any> {
    return this.http.get(this.UrlBase + 'notas/',
    {headers: this.httpFeaders}
    );
   };

  
}
