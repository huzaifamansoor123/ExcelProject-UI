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
    this.cols = [
      { field: "id", header: "ID" },
      { field: "transactionDate", header: "Transaction Date" },
      { field: "totalAmount", header: "Total Amount" },
      { field: "transactionType", header: "Transaction Type" },
      { field: "description", header: "Desccription" },
      { field: "currency", header: "Currency" },
      { field: "operationType", header: "Operation Type" }
    ];
  }

  changedatetostring(date: Date ) {
    this.converteddate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return this.converteddate;
  }
  postScearch(){
    if(this.findbydate!=null){
    this.sceachtableObj.date=this.changedatetostring(this.findbydate);
    }
    else{
    this.service.search(this.sceachtableObj).subscribe(
      data => {
        console.log(data);
      
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

}
