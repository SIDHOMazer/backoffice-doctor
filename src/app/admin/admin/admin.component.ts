import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/model/admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminList: Admin[] = [];
  selectedAdmin: any;
  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.displayAdmin();
  }

  displayAdmin() {
    this.adminservice.getAllAdmins().subscribe((res)=>{
     this.adminList = res;
    console.log(this.adminList);
    });
  
  }

  selectAdmin(admin:any){
    this.selectedAdmin=admin;
 }
}


