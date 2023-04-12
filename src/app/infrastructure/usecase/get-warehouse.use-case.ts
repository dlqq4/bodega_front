import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/domain/gateway/product.gateway';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';


@Injectable({
  providedIn: 'root'
})
export class GetWareHouseUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {
  }


  getWareHouseById(id:string) :Observable<WareHouseModel>{
    return this.factoryApiService.createApiWareHouse().getById(id);
  }

  getAllWareHouse() :Observable<WareHouseModel[]> {
    return this.factoryApiService.createApiWareHouse().getAll();
  }


}
