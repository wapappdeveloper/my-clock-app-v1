import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private commonService:CommonService, private commonService1:CommonService){}

  ngOnInit(){
    console.log(this.commonService.data);
    this.commonService.data = 'Darwin';
    console.log(this.commonService1.data);
  }
}
