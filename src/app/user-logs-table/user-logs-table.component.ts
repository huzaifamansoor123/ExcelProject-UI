import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../user-form/user.service';

@Component({
  selector: 'app-user-logs-table',
  templateUrl: './user-logs-table.component.html',
  styleUrls: ['./user-logs-table.component.css']
})
export class UserLogsTableComponent implements OnInit {

  @Input() userObjectWhichAlterSomethingInSearchTable : any;

  cols: any;
  logsList: any = [];
  show: Boolean = false;
  firstName;
  surName;
  bayId;
  selectId: any;
  dateString:any
  userTypeCurrent: string;
  currentUserEmail: string;
  username: string;
  constructor(private router: Router,
    private messageService: MessageService,private userService:UserService) { }

  ngOnInit() {
    this.checkUserType();
    this.fillCols();
    var d = new Date().toString();
    this.dateString = new Date(d).toUTCString();
    this.dateString = this.dateString.split(' ').slice(0, 5).join(' ');
    console.log(this.dateString);
  }

  fillCols() {
    this.cols = [
      { field: "name", header: "NAME" },
      { field: "email", header: "EMAIL" },
      { field: "updatedBy", header: "UPDATED BY" },
      { field: "deletedBy", header: "DELETED BY" },
      { field: "updatedAt", header: "UPDATED AT" },
      { field: "deletedAt", header: "DELETED AT" }
      // { field: "result", header: "RESULT" },

    ];
  }

  back() {
    history.go(-1);
  }

  checkUserType() {
    this.userTypeCurrent = sessionStorage.getItem('userType');
    this.currentUserEmail = sessionStorage.getItem('email');
    this.username = sessionStorage.getItem('username');
  }

  getAll() {
    this.logsList = [];
    this.userService.getAllLogs().subscribe(res => {
      this.logsList = [];
      if (res != "" || res != []) {
          
      }
    })
  }

  postUserLogs(){
    
    let obj = {
      "name":this.username,
      "email":this.currentUserEmail,
      "updatedBy":this.username,
      "deletedBy":this.username,
      "updatedAt":this.dateString,
      "deletedAt":this.dateString

    }

  }
  

}
