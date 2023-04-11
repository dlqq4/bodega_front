import { Injectable } from '@angular/core';
import { ProductGateway } from '../gateway/product.gateway';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/i-product.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductUseCase {

  constructor(private readonly productgatway :ProductGateway) {
  }

  updateProduct(id: string , product : ProductModel) :Observable<ProductModel> {
    return this.productgatway.update(id, product);
  }


}
