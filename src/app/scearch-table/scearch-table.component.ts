import { Component, OnInit } from '@angular/core';
import { Scearch } from './scearch';
import { ScearchserviceService } from './scearchservice.service';
import { MessageService } from 'primeng/api';
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-scearch-table',
  templateUrl: './scearch-table.component.html',
  styleUrls: ['./scearch-table.component.css']
})
export class ScearchTableComponent implements OnInit {

  data: any[];
  cols: any[];
  converteddate: any;
  sceachtableObj: Scearch = new Scearch();
  findbydate: Date;
  userTypeCurrent: string;
  currentUserEmail: string;
  username: string;
  reactive: boolean = false;
  delBtn: boolean = true;
  //totalRecords:number = 32;
  constructor(private service: ScearchserviceService, private messageservice: MessageService, private router: Router) { }

  ngOnInit() {


    this.checkUserType();
    if (this.userTypeCurrent == "ADMIN") {
      this.getalldata("ADMIN");
    }
    else {
      this.getActiveData()
    }


  }

  changedatetostring(date: Date) {
    this.converteddate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return this.converteddate;
  }
  postScearch() {
    if (this.findbydate != null) {
      this.sceachtableObj.date = this.changedatetostring(this.findbydate);
    }
    else {
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




  getActiveData() {



    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'email1', header: 'Email1' },
      { field: 'email2', header: 'Email2' },
      { field: 'phoneNo1', header: 'Phone1' },
      { field: 'phoneNo2', header: 'Phone2' },
      { field: 'company', header: 'Company' },
      { field: 'nationality', header: 'Nationality' },
      { field: 'countryOfResidence', header: 'Country Of Residence' },
      { field: 'status1', header: 'Status 1' },
      { field: 'status2', header: 'Status 2' },
      { field: 'status3', header: 'Status 3' },
      { field: 'dateOffc', header: 'Date of first Contact' },
      { field: 'firstPointOfContact', header: 'First point of contact' },
      { field: 'details', header: 'Details (eg Event)' },
      { field: 'oEmbassyGardens', header: 'Embassy Gardens' },
      { field: 'oTheGallery', header: 'The Gallery' },
      { field: 'oTheResidence', header: 'The Residence' },
      { field: 'oCliftonCourt', header: 'Clifton Court' },
      { field: 'oCliftonPlace', header: 'Clifton Place' },
      { field: 'oKaiVillas', header: 'Kai Villas' },
      { field: 'oAddyVillas', header: 'Addy Villas' },
      { field: 'total', header: 'Total' },

      { field: 'tEmbassyGardens', header: 'Embassy Gardens' },
      { field: 'tTheGallery', header: 'The Gallery' },

      { field: 'tTheResidence', header: 'The Residence' },
      { field: 'tCliftonCourt', header: 'Clifton Court' },
      { field: 'tCLiftonPalace', header: 'Clifton Place' },
      { field: 'tKaiVillas', header: 'Kai Villas' },
      { field: 'tAddyVillas', header: 'Addy Villas' },

      { field: 'activityStatus', header: 'Activity Status' }




    ];


    this.data = [];
    this.service.getActive().subscribe(response => {
      this.data = [];
      console.log(response)
      this.data = response;

      let status = (response.map(d => d.activityStatus))
      if (status == "Active") {
        this.reactive = false;
        this.delBtn = true;
      }
      else if (status == "InActive") {
        this.delBtn = false;
        this.reactive = true;
      }




    })
  }

  deletedatabyid(id: any) {
    this.service.deletedata(id, this.userTypeCurrent).subscribe(
      data => {

        this.data = []
        // console.log(data);
        if (data) {
          this.reactive = true;
          this.delBtn = false;
          this.getalldata(this.userTypeCurrent);

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

  reActiveDataById(id: any) {
    this.service.reActive(id).subscribe(
      data => {


        // console.log(data);
        if (data) {
          this.reactive = false;
          this.delBtn = true;
          this.getalldata("ADMIN");

          this.messageservice.add({
            severity: "success",
            summary: "Succesfully",
            detail: " succesfully Reactivated!"
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


  getalldata(userTypeCurrent: any) {

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'email1', header: 'Email1' },
      { field: 'email2', header: 'Email2' },
      { field: 'phoneNo1', header: 'Phone1' },
      { field: 'phoneNo2', header: 'Phone2' },
      { field: 'company', header: 'Company' },
      { field: 'nationality', header: 'Nationality' },
      { field: 'countryOfResidence', header: 'Country Of Residence' },
      { field: 'status1', header: 'Status 1' },
      { field: 'status2', header: 'Status 2' },
      { field: 'status3', header: 'Status 3' },
      { field: 'dateOffc', header: 'Date of first Contact' },
      { field: 'firstPointOfContact', header: 'First point of contact' },
      { field: 'details', header: 'Details (eg Event)' },
      { field: 'oEmbassyGardens', header: 'Embassy Gardens' },
      { field: 'oTheGallery', header: 'The Gallery' },
      { field: 'oTheResidence', header: 'The Residence' },
      { field: 'oCliftonCourt', header: 'Clifton Court' },
      { field: 'oCliftonPlace', header: 'Clifton Place' },
      { field: 'oKaiVillas', header: 'Kai Villas' },
      { field: 'oAddyVillas', header: 'Addy Villas' },
      { field: 'total', header: 'Total' },

      { field: 'tEmbassyGardens', header: 'Embassy Gardens' },
      { field: 'tTheGallery', header: 'The Gallery' },

      { field: 'tTheResidence', header: 'The Residence' },
      { field: 'tCliftonCourt', header: 'Clifton Court' },
      { field: 'tCLiftonPalace', header: 'Clifton Place' },
      { field: 'tKaiVillas', header: 'Kai Villas' },
      { field: 'tAddyVillas', header: 'Addy Villas' },

      { field: 'activityStatus', header: 'Activity Status' }




    ];


    this.data = [];
    if (userTypeCurrent == "ADMIN") {
      this.service.getalldata().subscribe(response => {

        console.log(response)
        this.data = response;

        let status = (response.map(d => d.activityStatus))
        if (status == "Active") {
          this.reactive = false;
          this.delBtn = true;
        }
        else if (status == "InActive") {
          this.delBtn = false;
          this.reactive = true;
        }

      });

    }
    else {

      this.getActiveData()

    }


  }






  updatebyid(id: any) {
    this.router.navigate(['form/' + id]);

  }
  checkUserType() {
    this.userTypeCurrent = sessionStorage.getItem('userType');
    this.currentUserEmail = sessionStorage.getItem('email');
    this.username = sessionStorage.getItem('username');
  }
}
