import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';


@Injectable({
  providedIn: 'root'
})
export class DeleteInventoryUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  
  deleteInventory(id: string) :Observable<boolean> {
    return this.factoryApiService.createApiInventory().delete(id);
  }

}
