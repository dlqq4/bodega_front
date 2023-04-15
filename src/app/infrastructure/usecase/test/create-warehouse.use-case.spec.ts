import { ProductModel } from "src/app/domain/model/i-product.model";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { CreateProductUseCase } from "../create-product.use-case";
import { ProductApiService } from "../../apis/product-api.service";
import { of } from "rxjs";
import { CreateWareHouseUseCase } from "../create-warehouse.use-case";
import { WareHouseModel } from "src/app/domain/model/i-warehouse.model";


describe('CreateWareHouseUseCase', () => {
  let useCase: CreateWareHouseUseCase;
  let factoryApiService: FactoryApiService;

  beforeEach(() => {
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiWareHouse']);
    useCase = new CreateWareHouseUseCase(factoryApiService);
  });

  it('should call create function of the api service and return an Observable with the created warehouse model', () => {
    const warehouse: WareHouseModel = { 
      
      name: 'Warehouse 1',
      address: '1234 Main St',
      phone: '555-1234',

    };
    const createdWarehouse: WareHouseModel = { 
      ...warehouse, 
    };
    
    (factoryApiService.createApiWareHouse as jasmine.Spy).and.returnValue({
      create: () => of(createdWarehouse)
    });

    useCase.createWareHouse(warehouse).subscribe(result => {
      expect(result).toEqual(createdWarehouse);
      expect(factoryApiService.createApiWareHouse).toHaveBeenCalled();
    });
  });
});
