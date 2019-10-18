import { Component, OnInit } from '@angular/core';
import { Scearch } from './scearch';
import { ScearchserviceService } from './scearchservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-scearch-table',
  templateUrl: './scearch-table.component.html',
  styleUrls: ['./scearch-table.component.css']
})
export class ScearchTableComponent implements OnInit {

  cols:any[];
  converteddate:any;
  sceachtableObj:Scearch=new Scearch();
  findbydate:Date;
  constructor(private service:ScearchserviceService,private messageservice:MessageService) { }

  ngOnInit() {
  }

  changedatetostring(date: Date ) {
    this.converteddate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return this.converteddate;
  }
  postScearch(){
    this.sceachtableObj.date=this.changedatetostring(this.findbydate);
    this.service.search(this.sceachtableObj).subscribe(
      data => {
      
      },
      error => {
        console.log(error);
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }
  

}
