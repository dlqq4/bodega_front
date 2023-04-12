import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from '../global-factory-api/factory-api.service';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';


@Injectable({
  providedIn: 'root'
})
export class CreateWareHouseUseCase {

  constructor(private readonly factoryApiService: FactoryApiService) {

  }

  createWareHouse(warewouse : WareHouseModel ) :Observable<WareHouseModel> {
    return this.factoryApiService.createApiWareHouse().create(warewouse);
  }



}
