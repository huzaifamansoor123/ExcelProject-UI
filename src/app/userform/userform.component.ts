import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataserviceService } from '../Services/dataservice.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  value: boolean = false;
  data: Data = new Data();
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private dataService: DataserviceService
  ) {
    console.log(this.data);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.getbyid(this.id);
    }
  }

  private getbyid(id:any) {
    this.dataService.getdatabyid(id).subscribe(d => {
      this.data.name = d.name;
      this.data.email1 = d.email1;
      this.data.email2 = d.email2;
      this.data.phoneNo1 = d.phoneNo1;
      this.data.phoneNo2 = d.phoneNo2;
      this.data.company = d.company;
      this.data.nationality = d.nationality;
      this.data.countryOfResidence = d.countryOfResidence;
      this.data.status1 = d.status1;
      this.data.status2 = d.status2;
      this.data.status3 = d.status3;
      this.data.dateOffc = new Date(d.dateOffc);
      this.data.firstPointOfContact = d.firstPointOfContact;
      this.data.details = d.details;
      this.data.oEmbassyGardens = d.oEmbassyGardens;
      this.data.oTheGallery = d.oTheGallery;
      this.data.oTheResidence = d.oTheResidence;
      this.data.oCliftonCourt = d.oCliftonCourt;
      this.data.oCliftonPlace = d.oCliftonPlace;
      this.data.oKaiVillas = d.oKaiVillas;
      this.data.oAddyVillas = d.oAddyVillas;
      this.data.total = d.total;
      this.data.tEmbassyGardens = d.tEmbassyGardens;
      this.data.tTheGallery = d.tTheGallery;
      this.data.tTheResidence = d.tTheResidence;
      this.data.tCliftonCourt = d.tCliftonCourt;
      this.data.tCliftonPlace = d.tCliftonCourt;
      this.data.tKaiVillas = d.tKaiVillas;
      this.data.tAddyVillas = d.tAddyVillas;
    });
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  save() {

    console.log(this.data);
   // this.data.dateOffc = this.data.dateOffc.toString();

    if (this.id != 0 && this.id != null) {
      this.dataService.updatedatabyid(this.data,this.id).subscribe(
        response => {
          console.log('', response);
          this.messageService.add({
              severity: 'success',
            summary: 'Data updated successfully',
            detail: 'Added'
          });
        },
        error => {
          this.messageService.add({
           severity: 'error',
            summary: 'Failed',
            detail: 'Something Went Wrong'
          });
        }
      );
    } else {
      console.log(this.data);
      debugger;
      this.dataService.savedata(this.data).subscribe(
        d => {
          console.log('', d);
          this.messageService.add({
          
            severity: 'success',
            summary: 'Data updated successfully',
            detail: 'Added'
          });
        },
        error => {
          this.messageService.add({
          
            severity: 'error',
            summary: 'Failed',
            detail: 'Unable to add Data'
          });
        }
      );
    }
  }

  onclick() {
    this.save();
  }

  routePage() {
    this.router.navigate(['']);
  }

  show() {
    console.log(this.data.oEmbassyGardens);
  }
}
