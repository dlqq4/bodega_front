import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { InventoryDTO } from 'src/app/domain/commands/inventory.dto';


@Injectable({
  providedIn: 'root'
})
export class CreateInventoryUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  createInventory(inventory : InventoryDTO) :Observable<InventoryModel> {
    return this.factoryApiService.createApiInventory().create(inventory);
  }



}
