import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { FactoryApiService } from '../global-factory-api/factory-api.service';


@Injectable({
  providedIn: 'root'
})
export class CreateProductUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  createProduct(product : ProductModel) :Observable<ProductModel> {
    return this.factoryApiService.createApiProduct().create(product);
  }


}
