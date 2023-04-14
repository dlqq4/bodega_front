import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { GetProductUseCase } from 'src/app/infrastructure/usecase/get-product.use-case';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  products : ProductModel[] = [];

  constructor(
    private getProductUseCase: GetProductUseCase,
    public routes : Router
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  public getProduct(): void {
    this.getProductUseCase.getAllproduct().subscribe({
      next: (response: ProductModel[] ) =>  {this.products = response;
      console.log(this.products);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }
 

}
