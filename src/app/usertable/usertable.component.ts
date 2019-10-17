import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Services/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  data: any;
  showLoading: boolean;
  cols: any[];
  constructor(
    private router: Router,
    private dataService: DataserviceService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.showLoading = true;
    this.showTable();
  }

  showTable() {
    this.showLoading = true;
    this.dataService.getdata().subscribe(response => {
      if (response) {
        this.showLoading = false;
        this.data = response;
      }
    });

    this.cols = [{ field: 'id', header: 'S.NO' }, { field: 'name', header: 'NAME' }];

    this.data = [];
  }

  onDelete(rowData) {
    this.dataService.deletedatabyid(rowData).subscribe(
      d => {
        this.dataService.getdata().subscribe((d: any) => {});
        this.showTable();
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Successfully Deleted!'
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Enable to delete!'
        });
      }
    );
  }

  editData(rowData) {
    this.router.navigate(['/form/' + rowData]);
  }
}
