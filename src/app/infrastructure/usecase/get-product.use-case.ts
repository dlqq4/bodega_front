import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/domain/gateway/product.gateway';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { FactoryApiService } from '../global-factory-api/factory-api.service';


@Injectable({
  providedIn: 'root'
})
export class GetProductUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {
  }

  

  getProductById(id:string) :Observable<ProductModel>{
    return this.factoryApiService.createApiProduct().getById(id);
  }

  getAllproduct() :Observable<ProductModel[]> {
    return this.factoryApiService.createApiProduct().getAll();
  }


}
