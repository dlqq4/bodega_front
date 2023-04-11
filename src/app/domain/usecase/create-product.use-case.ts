import { Injectable } from '@angular/core';
import { ProductGateway } from '../gateway/product.gateway';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/i-product.model';

@Injectable({
  providedIn: 'root'
})
export class CreateProductUseCase {

  constructor(private readonly productgatway :ProductGateway) {

  }


  createProduct(product : ProductModel) :Observable<ProductModel> {
    return this.productgatway.create(product);
  }



}
