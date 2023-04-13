import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { HomeComponent } from '../shared/home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes : Routes = [
    {
      path: '',
      children: [
        {path: 'app-view-product', component : ViewProductComponent},
        {path: 'app-update-product', component : UpdateProductComponent},
        {path: '**', component : HomeComponent}
      ]
      
    }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class ProductRoutingModule { }
