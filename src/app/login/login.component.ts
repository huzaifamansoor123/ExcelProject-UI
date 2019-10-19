import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService,
    private service: LoginService  ) { }

  dateString: any


  ngOnInit() {
    var d = new Date().toString();
    this.dateString = new Date(d).toUTCString();
    this.dateString = this.dateString.split(' ').slice(0, 5).join(' ');
    console.log(this.dateString);
  }
  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);

        sessionStorage.setItem('token', res.result.token);
        var username = sessionStorage.setItem('username', res.result.username);
        var userType = sessionStorage.setItem('userType', res.result.userType);

        // console.log(username+"  "+userType);

        //  sessionStorage.getItem('token');
        // localStorage.setItem('username', 'admin');
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Login Succesful'
        });
        setTimeout(() => {
          this.router.navigate(['userManagementform']);
        }, 1000);
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Wrong username and password'
        });
      }
    );

    // if(output == true){
  }

}
