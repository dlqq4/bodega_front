import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './create-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewProductComponent,
    UpdateProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewProductComponent
  ]
})
export class ProductModule { }
