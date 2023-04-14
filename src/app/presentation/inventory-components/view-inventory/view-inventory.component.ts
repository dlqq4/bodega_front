import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { DeleteInventoryUseCase } from 'src/app/infrastructure/usecase/delete-inventory.use-case';
import { GetInventoryUseCase } from 'src/app/infrastructure/usecase/get-inventory.use-case';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {

  inventorys : InventoryModel[] = [];

  constructor(
    private readonly getInventoryUseCase: GetInventoryUseCase,
    private readonly deleteInventoryUseCase: DeleteInventoryUseCase,
    public routes : Router) { }

  ngOnInit(): void {
    this.getAllInventory();
  }

  /*
  ngDoCheck(): void{
    this.getAllInventory();
  }
  */
  

  public getAllInventory(): void {
    this.getInventoryUseCase.getAllInventory().subscribe({
      next: (response: InventoryModel[] ) =>  {this.inventorys = response;
      console.log(this.inventorys);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }



  public deleteInventory(_id :string ): void {
    this.deleteInventoryUseCase.deleteInventory(_id).subscribe({
      next: (response: boolean ) => {console.log(response);},
      error: (error:HttpErrorResponse)=> {alert(error.message)},
      complete: () => alert("¡Inventory Delete OK!"),
      })
  }


  public goToUpdateInventory(id: string): void {
    this.routes.navigate([`/inventory/app-update-inventory/${id}`])
  }

  
}
