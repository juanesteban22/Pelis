import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = 'a145b62f';
  private baseUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }
  
  public getData(title: string): Observable<any> {
    console.log(title);
    
    const url = `${this.baseUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}`;
    console.log(url);
    
    return this.http.get<any>(url);
  }
  
}
