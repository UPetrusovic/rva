import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KORISNIK_USLUGE_URL } from '../constants';
import { KorisnikUsluge } from '../models/korisnik-usluge';

@Injectable({
  providedIn: 'root'
})
export class KorisnikUslugeService {

  constructor(private httpClient: HttpClient) { }

  public getAllKorisniks(): Observable<any> {
    return this.httpClient.get(`${KORISNIK_USLUGE_URL}`);
  }

  public addKorisnik (korisnik: KorisnikUsluge):Observable<any>{
    return this.httpClient.post(`${KORISNIK_USLUGE_URL}`, korisnik);
  }

  public updateKorisnik (korisnik: KorisnikUsluge):Observable<any>{
    return this.httpClient.put(`${KORISNIK_USLUGE_URL}/${korisnik.id}`,korisnik);
  }

  public deleteKorisnik (id:number):Observable<any>{
    return this.httpClient.delete(`${KORISNIK_USLUGE_URL}/${id}`);
  }
}
