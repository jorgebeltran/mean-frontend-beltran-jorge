import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';



@Injectable()
export class UserService {
  myHttpClient:HttpClient;

  constructor(httpclient: HttpClient) { 
    this.myHttpClient = httpclient;
  }
  getUserlist():User[]{
   let userList:User[]=[];
    userList.push({
      name: 'Carlos',
      lastname: 'beltran',
      username: 'carlos123',
      email:'carlos@gmail.com',
      avatar: 'avatarcarolos'
    });
    userList.push({
      name: 'jorge',
      lastname: 'beltran',
      username: 'carlos12',
      email:'cars@gmail.com',
      avatar: 'avatarcarol'
    });

      return userList;
    

  }
}
