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

  ngOnInit() {

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
            this.router.navigate(['user-List']);
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
