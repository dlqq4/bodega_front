import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { CreateProductUseCase } from 'src/app/infrastructure/usecase/create-product.use-case';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  //product!: ProductModel;

  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }


  productForm = this.formBuilder.group({
    brand: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    description: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    price: this.formBuilder.nonNullable.control<number>(0, { validators: [Validators.required] }),
    photo: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
  });


  public createProduct(): void {
     
      let producto : ProductModel = this.productForm.getRawValue();

      this.createProductUseCase.createProduct(producto).subscribe({
        next:data => {console.log(data)},
        error: (error: HttpErrorResponse) => { alert(error.message) },
        complete: ()=> alert("¡El producto se agrego correctamente!")
      })
    

  }

  /*
  public createProduct(): void {

    if (this.productForm.controls.brand.value
      && this.productForm.controls.description.value
      && this.productForm.controls.price.value
      && this.productForm.controls.photo.value
    ) {
      let producto = {
        brand: this.productForm.controls.brand.value,
        description: this.productForm.controls.description.value,
        price: + this.productForm.controls.price.value, //saque un + antes del this
        photo: this.productForm.controls.photo.value,
      }

      this.createProductUseCase.createProduct(producto).subscribe({
        next: (response: ProductModel) => {
          producto = response;
          console.log(producto);
          complete: ()=> alert("¡El producto se agrego correctamente!")
        },
        error: (error: HttpErrorResponse) => { alert(error.message) }
      })
    }

  }
  */

}