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
    private auth : Auth,
    private formBuilder : FormBuilder,
    public routes : Router
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  signInForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl ('', Validators.required)
  });

  public getProduct(): void {
    this.getProductUseCase.getAllproduct().subscribe({
      next: (response: ProductModel[] ) =>  {this.products = response;
      console.log(this.products);},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
      })
  }

  /*

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  async onClickLogin() {
    const userCredential = await this.loginWithGoogle();
    const token = await userCredential.user?.getIdToken();
    localStorage.setItem('token', token);
    console.log(token);
  }
  */


}
