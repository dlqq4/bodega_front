import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';


@Injectable({
  providedIn: 'root'
})
export class UpdateInventoryUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {
  }

  updateInventory(id: string , inventory : InventoryModel) :Observable<InventoryModel> {
    return this.factoryApiService.createApiInventory().update(id, inventory);
  }


}
