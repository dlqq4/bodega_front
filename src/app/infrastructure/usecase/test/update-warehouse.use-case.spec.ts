
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { UpdateProductUseCase } from '../update-product.use.case';
import { FactoryApiService } from '../../global-factory-api/factory-api.service';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { ProductApiService } from '../../apis/product-api.service';
import { UpdateWareHouseUseCase } from '../update-warehouse.use.case';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';
import { WareHouseApiService } from '../../apis/warehouse-api.service';


describe('UpdateWareHouseUseCase', () => {
  let useCase: UpdateWareHouseUseCase;
  let factoryApiService: FactoryApiService;
  let wareHouseApiService: WareHouseApiService;

  beforeEach(() => {
    wareHouseApiService = jasmine.createSpyObj('WareHouseApiService', ['update']);
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiWareHouse']);
    (factoryApiService.createApiWareHouse as jasmine.Spy).and.returnValue(wareHouseApiService);
    useCase = new UpdateWareHouseUseCase(factoryApiService);
  });

  it('should call update function of the repository and return an Observable with the updated wareHouse model', () => {
    const wareHouseId = '1234';

    const wareHouse: WareHouseModel = {
      _id :'1234',
      name: "Central WareHouse",
      address: "New York",
      phone: '123654789'
    };

    (wareHouseApiService.update as jasmine.Spy).and.returnValue(of(wareHouse));

    useCase.updateWareHouse(wareHouseId, wareHouse).subscribe(result => {
      expect(result).toEqual(wareHouse);
      expect(wareHouseApiService.update).toHaveBeenCalledWith(wareHouseId, wareHouse);
    });
  });

});
