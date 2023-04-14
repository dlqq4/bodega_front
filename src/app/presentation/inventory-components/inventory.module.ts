import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryRoutingModule } from './inventory-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';



@NgModule({
  declarations: [
    ViewInventoryComponent,
    AddInventoryComponent,
    UpdateInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewInventoryComponent
  ]
})
export class InventoryModule { }
