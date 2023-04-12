import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/domain/gateway/product.gateway';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';


@Injectable({
  providedIn: 'root'
})
export class GetInventoryUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {
  }

  

  getInventoryById(id:string) :Observable<InventoryModel>{
    return this.factoryApiService.createApiInventory().getById(id);
  }

  getAllInventory() :Observable<InventoryModel[]> {
    return this.factoryApiService.createApiInventory().getAll();
  }


}
