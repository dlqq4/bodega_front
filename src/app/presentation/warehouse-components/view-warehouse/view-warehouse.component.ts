import { Component, OnInit } from '@angular/core';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';

@Component({
  selector: 'app-view-warehouse',
  templateUrl: './view-warehouse.component.html',
  styleUrls: ['./view-warehouse.component.scss']
})
export class ViewWareHouseComponent implements OnInit {

  warehouses : WareHouseModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
