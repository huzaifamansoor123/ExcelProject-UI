import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  userType:any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.userType = sessionStorage.getItem('userType');
  }

  routeToUser() {
    this.router.navigate(["user-List"]);
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

  checkUserType(){
    if (sessionStorage.getItem("userType") == "ADMIN") return true;
    else return false;
  }
  gotosearch(){
    this.router.navigate(['scearchtable'])
  }
}
