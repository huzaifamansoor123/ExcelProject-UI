import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from './User';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  usertypes: { label: string; value: string; }[];
  userObj: User = new User();
  constructor(private userService: UserService,private messageService: MessageService,private router : Router) { }

  ngOnInit() {
    this.usertypes=[
      {label:"ADMIN", value:"ADMIN"},
      {label:"USER",value:"USER"}
    ]
  }

  saveUser(){
    this.userService.SaveUser(this.userObj).subscribe( data=>{
      console.log(data);
      if(data['result'].status == 200){
        
      this.messageService.add({
        severity: "success",
        summary: "sign up successfull",
        detail: "new user added"

      });
    }else{
      this.messageService.add({
        severity: "warn",
        summary: "Failed",
        detail: "user already exists"
      });
    }
    },
    error =>{
      this.messageService.add({
          severity: 'error',
          summary: 'sign up failed',
          detail: 'Failed'
      });
    }
  );
  

  }

}
