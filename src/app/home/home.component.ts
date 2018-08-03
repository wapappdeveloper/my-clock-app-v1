import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService:CommonService, private commonService1:CommonService) { }

  ngOnInit() {
    console.log(this.commonService.data);
    this.commonService.data = "Raj";
    console.log(this.commonService1.data);
  }

}
