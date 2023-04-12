import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  exports: [
    ViewProductComponent
  ]
})
export class ProductModule { }
