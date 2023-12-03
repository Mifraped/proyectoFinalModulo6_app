import { Injectable } from '@angular/core';
import { Profesional } from '../models/profesional';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalServiceService {

  public profesionales: Profesional[] = []

  private url = "http://localhost:3000/profesionales"

  constructor(private http: HttpClient) { }

  public getAll():Observable<object>{
    return this.http.get(this.url)
  }

  public getOne(nombre: string, apellido: string):Observable<object>{
    return this.http.get(this.url + `?name=${nombre}&lastName=${apellido}`)
  }

  public postProf(prof: Profesional):Observable<object>{
    return this.http.post(this.url, prof)
  }

  public putProf(prof: Profesional):Observable<object>{
    return this.http.put(this.url, prof)
  }

  public deleteProf(nombre: string, apellido: string):Observable<object>{
    return this.http.delete(this.url + `?name=${nombre}&lastName=${apellido}`)
  }
}
