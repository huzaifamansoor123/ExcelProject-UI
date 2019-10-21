import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../user-form/user.service';

@Component({
  selector: 'app-user-logs-table',
  templateUrl: './user-logs-table.component.html',
  styleUrls: ['./user-logs-table.component.css']
})
export class UserLogsTableComponent implements OnInit {

  activityLogs = [];
  totalRecords:any;
  cols: any;
  logsList: any = [];
  show: Boolean = false;
  firstName;
  surName;
  bayId;
  selectId: any;
  dateString:any
  userTypeCurrent: string;
  currentUserEmail: string;
  username: string;
  id:any;
  constructor(private router: Router,
    private messageService: MessageService,private userService:UserService,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.checkUserType();
    this.fillCols();
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getAll(this.id);
    var d = new Date().toString();
    this.dateString = new Date(d).toUTCString();
    this.dateString = this.dateString.split(' ').slice(0, 5).join(' ');
    console.log(this.dateString);
  }

  fillCols() {
    this.cols = [
      { field: "activitylogsId", header: "ACTIVITY LOGS ID" },

      { field: "createdAt", header: "CREATED AT" },
      { field: "createdBy", header: "CREATED BY" },
      { field: "updatedBy", header: "UPDATED BY" },
      { field: "updatedAt", header: "UPDATED AT" },
      { field: 'name', header: 'Name' },
      { field: 'nationality', header: 'Nationality' },
      { field: 'email1', header: 'Email1' },
      { field: 'email2', header: 'Email2' },
      { field: 'details', header: 'Details' },
      { field: 'company', header: 'Company' },
      { field: 'activityStatus', header: 'Activity Status' },
      { field: 'countryOfResidence', hader: 'COUNTRY OF RESIDENCE' },
      { field: 'status1', header: 'Status1' },
      { field: 'status2', header: 'Status2' },
      { field: 'status3', header: 'Status3' },
      { field: 'userDataId', header: 'USER DATA ID' },
      { field: 'oCliftonPlace', header: 'CLIFTON PLACE' },
      { field: 'oCliftonCourt', header: 'CLIFTON COURT' },
      { field: 'oAddyVillas', header: 'ADDY VILLAS' },
      { field: 'oEmbassyGardens', header: 'EMBASSY GARDENS' },
      { field: 'oKaiVillas', header: 'KAI VILLAS' },
      { field: 'oTheGallery', header: 'THE GALLERY' },
      { field: 'oTheResidence', header: 'THE RESIDENCE' }
      
      

    ];
  }

  back() {
    history.go(-1);
  }

  checkUserType() {
    this.userTypeCurrent = sessionStorage.getItem('userType');
    this.currentUserEmail = sessionStorage.getItem('email');
    this.username = sessionStorage.getItem('username');
  }

  getAll(id:any) {
    this.logsList = [];
    this.userService.getActivityLogs(id).subscribe(res => {
      this.logsList = [];
      console.log(res);
      this.totalRecords = res.lenght;
      if (res != "" || res != []) {
          res.map(d=>{
            this.activityLogs.push({
              name:d.name!=null?d.name:"No name found",
              createdBy: d.createdBy!=null?d.createdBy:"System",
              createdAt : d.createdAt!=null?d.createdAt:"Created date not available",
              updatedBy: d.updatedBy != null ? d.updatedBy : "System",
              updatedAt: d.updatedAt != null ? d.updatedAt : "Update date not available",
              activitylogsId: d.activityId != null ? d.activityId : "No id available",
              nationality: d.nationality,
              countryOfResidence: d.countryOfResidence,
              email1: d.email1,
              email2: d.email2,
              details: d.details,
              dateOffc: d.dateOffc,
              company: d.company,
              activityStatus: d.activityStatus,
              userDataId: d.userDataId,
              phone1: d.phone1,
              phone2: d.phone2,
              status1: d.status1,
              status2: d.status2,
              status3: d.status3,
              oAddyVillas: d.oAddyVillas,
              oCliftonCourt: d.oCliftonCourt,
              oCliftonPlace: d.oCliftonPlace,
              oEmbassyGardens: d.oEmbassyGardens,
              oKaiVillas: d.oKaiVillas,
              oTheGallery: d.oTheGallery,
              oTheResidence: d.oTheResidence
            });
          });
      }
    })
  }


  

}
