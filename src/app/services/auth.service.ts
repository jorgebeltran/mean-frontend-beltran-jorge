import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/observable';

const authApiUrl='http://localhost:3000/auth';

@Injectable()
export class AuthService {

 
  constructor(private htttpclient: HttpClient) { }

  login(credentials): Observable<any> {
    return this.htttpclient.post(`${authApiUrl}/login`, credentials);
  };
  getMyPersonalInformation(): Observable<any> {
       return this.htttpclient.get(`${authApiUrl}/me`);
	   };
  }

