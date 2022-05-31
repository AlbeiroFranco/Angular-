import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  url = 'https://localhost:44315/';
  apiUrl = 'api/Tarjeta';
  
  constructor(private http: HttpClient) { }

  getList():Observable<any>{
    return this.http.get(`${this.url}${this.apiUrl}`);
  }

  saveTarjeta(tarjeta: any):Observable<any>{
    return this.http.post(`${this.url}${this.apiUrl}`, tarjeta);
  }

  updateTarjeta(id: number, tarjeta: any):Observable<any>{
    return this.http.put(`${this.url}${this.apiUrl}/${id}`, tarjeta)
  }

  deleteTarjeta(id: number):Observable<any>{
    return this.http.delete(`${this.url}${this.apiUrl}/${id}`)
  }
}
