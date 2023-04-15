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
  
  imageUrls = [
    'https://i.pinimg.com/564x/34/4a/86/344a86b35becc8d1e71c54c4c663d028.jpg',
    'https://i.pinimg.com/564x/e3/90/87/e39087da3293ebd3e5adb968bc34106d.jpg',
    'https://i.pinimg.com/564x/56/5f/ba/565fba0f9bce91a26a0e49d11d4d87c2.jpg'
  ];

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
