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
        if(res.status=="200"){
          console.log('toker', res);

          sessionStorage.setItem('token', res.result.token);
          sessionStorage.setItem('email',res.result.email);
          sessionStorage.setItem('username', res.result.username);
          sessionStorage.setItem('userType', res.result.userType);
          this.messageService.add({
            severity: 'success',
            summary: 'Service Message',
            detail: 'Login Succesful'
          });
          setTimeout(() => {
            this.router.navigate(['/scearchtable']);
          }, 1000);
        }
        else{
          this.messageService.add({
            severity: 'error',
            summary: 'You are not an active user',
            detail: 'FAILED'
          });

          this.router.navigate(['']);
        }
     
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
