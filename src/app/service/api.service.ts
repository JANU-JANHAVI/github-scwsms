import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  httpGet(url: string): Observable<any>{
   return this.http.get(this.apiUrl+url);
  }

  httpPost(url: string, body: any): Observable<any>{
    return this.http.post(this.apiUrl+url, body);
   }

  httpDelete(url: string, body: any): Observable<any>{
    return this.http.delete(this.apiUrl+url, body);
   }

   httpPut(url: string, body: any): Observable<any>{
    return this.http.put(this.apiUrl+url, body);
   }
}
