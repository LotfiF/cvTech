import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne [];
  link = 'http://localhost:3000/api/personnes';
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'fathi', 'lotfi', 28, 'lotfi_fathi.jpg', 1000, ' Web Developer'),
      new Personne(2, 'salaa', 'rim', 26, 'rim_salaa.jpg', 1001, ' Phd Pharmacy'),
    ];
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne []>(this.link);
  }

  getFakePersonne() {
    return this.personnes;
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>( this.link + `/${id}`);
  }

  addPersonne(personne: Personne): Observable<any> {
  //  const token = localStorage.getItem('token');
  //  if (token){
  //  const params = new HttpParams().set('access_token', token);
  //  return this.http.post(this.link, personne, {params});
  //  }
    return this.http.post(this.link, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete( this.link + `/${id}`);
  }
  updatePersonne(personne: Personne) {
    console.log(personne);
    return this.http.put(this.link, personne);
  }
  findByName(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.link, {params});
  }
}
