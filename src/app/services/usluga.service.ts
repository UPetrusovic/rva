import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USLUGA_URL, USLUGE_URL } from '../constants';
import { Usluga } from '../models/usluga';

@Injectable({
  providedIn: 'root'
})
export class UslugaService {

  constructor(private httpClient: HttpClient) { }

  public getAllUslugas():Observable<any>{
    return this.httpClient.get(`${USLUGA_URL}`);
  }

  public addUsluga(usluga: Usluga):Observable<any> {
    return this.httpClient.post(`${USLUGA_URL}`, usluga);
  }

  public updateUsluga(usluga : Usluga):Observable<any>{
    return this.httpClient.put(`${USLUGA_URL}/${usluga.id}`, usluga);
  }

  public deleteUsluga(id:number):Observable<any>{
    return this.httpClient.delete(`${USLUGA_URL}/${id}`);
  }

  public getUsluga(id:number):Observable<any> {
    return this.httpClient.get(`${USLUGE_URL}/${id}`);
  }
}
