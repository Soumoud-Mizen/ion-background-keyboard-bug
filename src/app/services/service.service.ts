import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class Service {
  baseUrl = "https://calcul8-pp.pixelslabs.com/api/"
  constructor(public http: HttpClient) { }

  ValidateCode(code): Observable<any> {
    return this.http.post(`${this.baseUrl}user/inscription/step-1-3`, code)
  }

  registerUser(data:User): Observable<any> {
    return this.http.post(`${this.baseUrl}user/inscription/step-2`, data)
  }

  getwilaya(): Observable<any> {
    return this.http.get(`${this.baseUrl}user/getWilawa`)
  }

  getContact(idUser): Observable<any> {
    return this.http.get(`${this.baseUrl}user/getWilaya`, idUser)
  }
}
