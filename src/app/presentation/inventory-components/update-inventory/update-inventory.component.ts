import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { QuantityInventoryDTO } from 'src/app/domain/commands/quantity-inventory.dto';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { GetInventoryUseCase } from 'src/app/infrastructure/usecase/get-inventory.use-case';
import { UpdateInventoryUseCase } from 'src/app/infrastructure/usecase/update-inventory.use.case';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.scss']
})
export class UpdateInventoryComponent implements OnInit {

  id! : string;

  constructor(
    private readonly updateInventoryUseCase: UpdateInventoryUseCase,
    private formBuilder: FormBuilder,
    private activated : ActivatedRoute,
    private readonly getInventoryUseCase : GetInventoryUseCase
    ) { }

  ngOnInit(): void {
    this.captureID();
    this.obtenerInventory();
  }

  quantityInventoryForm = this.formBuilder.group({
    _id: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }), 
    quantity: this.formBuilder.nonNullable.control<number>(0, { validators: [Validators.required] }),   
  });

  public captureID(): void {
    this.activated.params.subscribe((params : Params) => {this.id = params['id']})
  }

  obtenerInventory(): void {
    this.getInventoryUseCase.getInventoryById(this.id).subscribe({
      next: (response: InventoryModel ) =>  {
        this.quantityInventoryForm.patchValue(response)
      },
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }

  public updateInventory(): void {

    let quantityInventory : QuantityInventoryDTO = this.quantityInventoryForm.getRawValue();

    this.updateInventoryUseCase.updateQuantityInventory(quantityInventory).subscribe({
      next: (response: InventoryModel ) => {console.log(response);},
      error: (error:HttpErrorResponse)=> {alert(error.message)},
      complete: () => alert("¡Inventory Update OK!"),
      })
  }



}
