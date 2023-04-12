import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewWareHouseComponent } from './view-warehouse/view-warehouse.component';
import { WarehouseRoutingModule } from './warehouse-routing.module';



@NgModule({
  declarations: [
    ViewWareHouseComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    HttpClientModule
  ],
  exports: [
    ViewWareHouseComponent
  ]
})
export class WarehouseModule { }
