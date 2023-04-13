import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { GetInventoryUseCase } from 'src/app/infrastructure/usecase/get-inventory.use-case';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {

  inventorys : InventoryModel[] = [];

  constructor(private readonly getInventoryUseCase: GetInventoryUseCase) { }

  ngOnInit(): void {
    this.getAllInventory();
  }

  public getAllInventory(): void {
    this.getInventoryUseCase.getAllInventory().subscribe({
      next: (response: InventoryModel[] ) =>  {this.inventorys = response;
      console.log(this.inventorys);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }

}
