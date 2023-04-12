import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/domain/gateway/product.gateway';
import { FactoryApiService } from '../global-factory-api/factory-api.service';


@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  
  deleteProduct(id: string) :Observable<boolean> {
    return this.factoryApiService.createApiProduct().delete(id);
  }

}
