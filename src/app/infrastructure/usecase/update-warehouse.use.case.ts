import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';


@Injectable({
  providedIn: 'root'
})
export class UpdateWareHouseUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {
  }

  updateWareHouse(id: string , wareHouse : WareHouseModel) :Observable<WareHouseModel> {
    return this.factoryApiService.createApiWareHouse().update(id, wareHouse);
  }


}
