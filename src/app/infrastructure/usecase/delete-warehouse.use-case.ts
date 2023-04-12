import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';


@Injectable({
  providedIn: 'root'
})
export class DeleteWareHouseUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  
  deleteWareHouse(id: string) :Observable<boolean> {
    return this.factoryApiService.createApiWareHouse().delete(id);
  }

}
