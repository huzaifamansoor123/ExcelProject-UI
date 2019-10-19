import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logs-table',
  templateUrl: './user-logs-table.component.html',
  styleUrls: ['./user-logs-table.component.css']
})
export class UserLogsTableComponent implements OnInit {

  dateString:any
  constructor() { }

  ngOnInit() {
    var d = new Date().toString();
    this.dateString = new Date(d).toUTCString();
    this.dateString = this.dateString.split(' ').slice(0, 5).join(' ');
    console.log(this.dateString);
  }
  

}
