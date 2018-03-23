import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

const userApiUrl='http://localhost:3000/users';

@Injectable()
export class UserService {
  myHttpClient:HttpClient;

  constructor(httpclient: HttpClient) { 
    this.myHttpClient = httpclient;
  }
  getUserlist():Observable<any>{
    return this.myHttpClient.get(userApiUrl);

  
  }
  getUserById(userid:string):Observable<any>{
    return this.myHttpClient.get(`${userApiUrl}/${userid}`);
  }
  deleteUser(deletedUserId: string ):Observable<any>{
       return this.myHttpClient.delete(`${userApiUrl}/${deletedUserId}`);
  }
  createUser(newUser:User):Observable<any>{
    return this.myHttpClient.post(userApiUrl,newUser);
  }
}
