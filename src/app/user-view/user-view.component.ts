import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'umss-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userid:string;
  userViewed:User={
    name:'',
    lastname:'',
    username:'',
    email:'',
    avatar:''
  };
  constructor(private activaterouter:ActivatedRoute,
  private userservices:UserService) { }

  ngOnInit() {
    this.activaterouter.params.subscribe((paramss)=>{
      this.userid=paramss.id;
      this.userservices.getUserById(this.userid).subscribe(
        (response)=>{
          console.log('respuesta del servidor', response);
          this.userViewed=response.data;

        },(error)=>{
          console.log('erro del servidor',error);
        }
      )
    })

  }

}
