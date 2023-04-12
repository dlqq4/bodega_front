import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/utils/service/global.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GlobalService]
})
export class HomeComponent implements OnInit{

  constructor(public globalService: GlobalService){}

  ngOnInit(): void {
  }

  ngDoCheck(){
   // this.globalService.eligeLogin()
  }

  
}
