import { Injectable } from '@angular/core';
import { ProductGateway } from '../gateway/product.gateway';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/i-product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductUseCase {

  constructor(private readonly productgatway :ProductGateway) {
  }

  getProductById(id:string) :Observable<ProductModel>{
    return this.productgatway.getById(id);
  }

  getAllproduct() :Observable<ProductModel[]> {
    return this.productgatway.getAll();
  }


}
