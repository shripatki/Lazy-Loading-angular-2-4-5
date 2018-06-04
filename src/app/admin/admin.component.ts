import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    }
    increment() {
    this.adminService.counter += 1;
    }

}
