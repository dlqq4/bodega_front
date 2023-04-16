import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryDTO } from 'src/app/domain/commands/inventory.dto';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';
import { CreateInventoryUseCase } from 'src/app/infrastructure/usecase/create-inventory.use-case';
import { GetProductUseCase } from 'src/app/infrastructure/usecase/get-product.use-case';
import { GetWareHouseUseCase } from 'src/app/infrastructure/usecase/get-warehouse.use-case';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  products : ProductModel[] = [];
  warehouses : WareHouseModel[] = [];

  constructor(
    private readonly createInventoryUseCase: CreateInventoryUseCase,
    private readonly getWareHouseUseCase : GetWareHouseUseCase,
    private getProductUseCase: GetProductUseCase,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getWareHouse();
  }

  inventoryForm = this.formBuilder.group({
    product: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    warehouse: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    level: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    quantity: this.formBuilder.nonNullable.control<number>(0, { validators: [Validators.required] }),
  });

  public createInventory(): void {

    let inventory: InventoryDTO = this.inventoryForm.getRawValue();

    this.createInventoryUseCase.createInventory(inventory).subscribe({
      next: data => { console.log(data) },
      error: (error: HttpErrorResponse) => { alert(error.message) },
      complete: () => alert("¡El producto se agrego correctamente!")
    })


  }


  public getProduct(): void {
    this.getProductUseCase.getAllproduct().subscribe({
      next: (response: ProductModel[]) => {
        this.products = response;
        console.log(this.products);
      },
      error: (error: HttpErrorResponse) => { alert(error.message) }
    })
  }


  public getWareHouse(): void {
    this.getWareHouseUseCase.getAllWareHouse().subscribe({
      next: (response: WareHouseModel[] ) =>  {this.warehouses = response;
      console.log(this.warehouses);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }


}
