import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routeToUser() {
    this.router.navigate(["userManagementform"]);
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

  checkUserType(){
    if (sessionStorage.getItem("userType") == "ADMIN") return true;
    else return false;
  }
}
