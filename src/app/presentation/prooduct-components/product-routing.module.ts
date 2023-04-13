import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { HomeComponent } from '../shared/home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GuardLoginGuard } from 'src/app/utils/guards/guard-login.guard';
import { AddProductComponent } from './create-product/add-product.component';


const routes : Routes = [
    {
      path: '',
      children: [
        {path: 'app-view-product', component : ViewProductComponent, canActivate : [GuardLoginGuard]},
        {path: 'app-update-product', component : UpdateProductComponent, canActivate : [GuardLoginGuard]},
        {path: 'app-add-product', component : AddProductComponent, canActivate : [GuardLoginGuard]},
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
