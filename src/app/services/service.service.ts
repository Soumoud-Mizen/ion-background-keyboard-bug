import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class Service {
  baseUrl = 'https://calcul8-pp.pixelslabs.com/api/';
  authState = new BehaviorSubject(false);
  terms = false;
  currentRcp = '';
  constructor(
    public http: HttpClient,
    private nStorage: NativeStorage) { }

  ValidateCode(code): Observable<any> {
    const data = { codeToCheck: code };
    return this.http.post(`${this.baseUrl}user/inscription/step-1-3`, data);
  }

  registerUser(data: User): Observable<any> {
    return this.http.post(`${this.baseUrl}user/inscription/step-2`, data);
  }

  getwilaya(): Observable<any> {
    return this.http.get(`${this.baseUrl}wilaya`);
  }

  getContact(idUser): Observable<any> {
    return this.http.get(`${this.baseUrl}user/getWilaya`, idUser);
  }

  getTerms(): Observable<any> {
    return this.http.get(`${this.baseUrl}terms-and-condition`);
  }

  getRcp(): Observable<any> {
    return this.http.get(`${this.baseUrl}rcp-document-section`);
  }

  ifLoggedIn() {
    this.nStorage.getItem('appState').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }


  isAuthenticated() {
    return this.authState.value;
  }

}
