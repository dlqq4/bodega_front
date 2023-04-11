import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductGateway } from 'src/app/domain/gateway/product.gateway';
import { ProductApiService } from '../apis/product-api.service';
import { InventoryGateway } from 'src/app/domain/gateway/inventory.gateway';
import { WareHouseGateway } from 'src/app/domain/gateway/warehouse.gateway';
import { WareHouseApiService } from '../apis/warehouse-api.service';
import { InventoryApiService } from '../apis/inventory-api.service';

@Injectable({
  providedIn: 'root'
})
export class FactoryApiService {

  constructor(private http: HttpClient) {
  }

  createApiProduct(): ProductGateway {
    return new ProductApiService(this.http);
  }

  createApiInventory(): InventoryGateway {
    return new InventoryApiService(this.http);
  }
   
  createApiWareHouse(): WareHouseGateway {
    return new WareHouseApiService(this.http);
  }


}
