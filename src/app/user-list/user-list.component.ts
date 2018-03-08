import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../services/user.service';
import{Router} from '@angular/router'




@Component({
  selector: 'umss-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 /* usertest: User= {
    name: 'Carlos',
    lastname: 'beltran',
    username: 'carlos123',
    email:'carlos@gmail.com',
    avatar: 'avatarcarolos'
  };*/
  userList:User[]=[];
  constructor(private userservice:UserService,
    private router:Router) {  }
  ngOnInit() {
    this.userservice.getUserlist().subscribe(
      (response)=>{
        //console.log('respuesta del servidor:', response);
        this.userList=response.data;
      },(error)=>{
        console.log('error del servidor',error);

      }
    );
  }
  viewUser(userId):void{
    this.router.navigate(['user',userId,'view']);
  }

}
