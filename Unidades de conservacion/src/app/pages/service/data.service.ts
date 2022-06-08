import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidades } from '../../interfaces/datos.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getDatos(){
     return this.http.get('http://localhost:3000/unidad');
  }

  getForId(id: Unidades):Observable<Unidades>{
    return this.http.get<Unidades>(`http://localhost:3000/unidad?id=${id}`)
    .pipe(
      map((res: any) => {
        return res[0];
      })
    )
  }

  postDatos(data: Unidades):Observable<Unidades>{
    return this.http.post<Unidades>('http://localhost:3000/unidad', data)
  }

  putDatos(data: Unidades):Observable<Unidades>{  
    return this.http.put<Unidades>(`http://localhost:3000/unidad/${data.id}`, data);
  }

  deleteDatos(data: Unidades):Observable<Unidades>{
    return this.http.delete<Unidades>(`http://localhost:3000/unidad/${data.id}`)
  }


}
