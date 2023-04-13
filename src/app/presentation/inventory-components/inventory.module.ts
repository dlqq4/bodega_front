import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ProductRoutingModule } from '../prooduct-components/product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InventoryRoutingModule } from './inventory-routing.module';



@NgModule({
  declarations: [
    ViewInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule
  ],
  exports: [
    ViewInventoryComponent
  ]
})
export class InventoryModule { }
