import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-form/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from '../user-form/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  cols: { field: string; header: string; }[];
  userTableData= [];
  showLoading;
  usertypes=[];
  displayDialog: boolean;
  selectedUser:User;
  newUser:boolean;
  userObj: User = new User();
  car= true;
  constructor(private userService: UserService,private messageService: MessageService,private router : Router) { }

  ngOnInit() {

    this.usertypes=[
      {label:"ADMIN", value:"ADMIN"},
      {label:"USER",value:"USER"}
    ]
    this.populateCols();
    this.showLoading = true;
    this.getUsers();
  }

  populateCols() {
    this.cols = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "email", header: "Email Address" },
      { field: "userType", header: "Email Address" }

    ];
  }

  getUsers(){
    this.showLoading = true;
    this.userTableData = [];
    this.userService.getUser().subscribe(response=>{
      this.showLoading = false;
      console.log(response)
      response.map(d=>
        this.userTableData.push({
          id:d.id,
          name:d.name,
          email:d.email,
          userType:d.userType
        })
        )
    })
  }

  updateUsers(){
    let id = this.userTableData[this.userTableData.indexOf(this.selectedUser)]['id'];
    this.userService.editUser(id,this.userObj).subscribe(d=>{
      
      this.getUsers();
      this.displayDialog = false;
      this.messageService.add({
        severity: "success",
        summary: "Successfull",
        detail: "User Updated successfully"
      });
    },  error => {
      console.log(this)
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Error updating user"
      });
    })
  }
  

  deleteUser(){
    let id = this.userTableData[this.userTableData.indexOf(this.selectedUser)]['id'];
    this.userService.deleteUser(id).subscribe(d=>{
      this.getUsers();
      this.displayDialog = false;
      this.messageService.add({
        severity: "success",
        summary: "Successfull",
        detail: "User Deleted successfully"
      });
    },  error => {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Deleting Users"
      });
    })
  }

  onRowSelect(event){
    this.newUser = false;
    this.userObj = event.data;
    this.displayDialog = true;
  }

  routeToAddNewUser(){
    this.router.navigate(['userManagementform'])
  }




}
