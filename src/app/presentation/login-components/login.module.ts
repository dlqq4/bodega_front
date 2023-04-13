import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductRoutingModule } from '../prooduct-components/product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent   
  ],

  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent
  ]
})
export class LoginModule { }
