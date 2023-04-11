import { Injectable } from '@angular/core';
import { ProductGateway } from '../gateway/product.gateway';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/i-product.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCase {

  constructor(private readonly productgatway :ProductGateway) {

  }

  
  deleteProduct(id: string) :Observable<boolean> {
    return this.productgatway.delete(id);
  }

}
