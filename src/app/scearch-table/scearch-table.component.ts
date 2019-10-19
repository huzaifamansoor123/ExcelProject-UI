import { Component, OnInit } from '@angular/core';
import { Scearch } from './scearch';
import { ScearchserviceService } from './scearchservice.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scearch-table',
  templateUrl: './scearch-table.component.html',
  styleUrls: ['./scearch-table.component.css']
})
export class ScearchTableComponent implements OnInit {

  data:any[];
  cols:any[];
  converteddate:any;
  sceachtableObj:Scearch=new Scearch();
  findbydate:Date;
  constructor(private service:ScearchserviceService,private messageservice:MessageService,private router:Router) { }

  ngOnInit() {
  this.getalldata();
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



getalldata(){
  this.cols = [
    { field: 'id', header: 'ID' },
    {field: 'name', header: 'Name' },
    {field: 'nationality', header: 'Nationality' },
    {field: 'email1', header: 'Email1' },
    { field: 'email2', header: 'Email2' },
    {field: 'details', header: 'Details' },
    {field: 'dateOffc', header: 'DateOffC' },
    {field: 'company', header: 'Company' },
    { field: 'activityStatus', header: 'Activity Status' },
    {field: 'countryOfResidence', header: 'Country Of Residence' },
    {field: 'phone1', header: 'Phone1' },
    {field: 'phone2', header: 'Phone2' },
    { field: 'status1', header: 'Status1' },
    {field: 'status2', header: 'Status2' },
    {field: 'status3', header: 'Status3' }
 
   
  ];

  this.data = [];
  this.service.getalldata().subscribe(response=>{

    
    console.log(response)
    response.map(d=>
      this.data.push({
        id:d.id,
        name:d.name,
        nationality:d.nationality,
        email1:d.email1,
        email2:d.email2,
        details:d.details,
        dateOffc:d.dateOffc,
        company:d.company,
        activityStatus:d.activityStatus,
        countryOfResidence:d.countryOfResidence,
        phone1:d.phone1,
        phone2:d.phone2,
        status1:d.status1,
        status2:d.status2,
        status3:d.status3




      })
      )
  })
}

deletedatabyid(id:any){
  this.service.deletedata(id).subscribe(
    data=>{

    // console.log(data);
    if(data){
      this.getalldata();
    
    this.messageservice.add({
      severity: "success",
      summary: "Succesfully",
      detail: " succesfully deleted!"
    });
  }
  },
  error => {
    // console.log(error);
    this.messageservice.add({
      severity: "error",
      summary: "Error Found",
      detail: "Something went wrong check your internet connection "
    });
  }
  );
  

}
updatebyid(id:any){
  this.router.navigate(['form/'+id]);
  
    }

}
