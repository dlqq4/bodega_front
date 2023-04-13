import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';
import { GetWareHouseUseCase } from 'src/app/infrastructure/usecase/get-warehouse.use-case';

@Component({
  selector: 'app-view-warehouse',
  templateUrl: './view-warehouse.component.html',
  styleUrls: ['./view-warehouse.component.scss']
})
export class ViewWareHouseComponent implements OnInit {

  warehouses : WareHouseModel[] = [];

  constructor(private readonly getWareHouseUseCase : GetWareHouseUseCase) { }

  ngOnInit(): void {
    this.getWareHouse();
  }


  public getWareHouse(): void {
    this.getWareHouseUseCase.getAllWareHouse().subscribe({
      next: (response: WareHouseModel[] ) =>  {this.warehouses = response;
      console.log(this.warehouses);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }

}
