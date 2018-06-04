import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin/admin.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

}
