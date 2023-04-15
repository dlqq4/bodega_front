import { of } from "rxjs";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { GetWareHouseUseCase } from "../get-warehouse.use-case";
import { WareHouseModel } from "src/app/domain/model/i-warehouse.model";


describe('GetWareHouseUseCase', () => {
  let useCase: GetWareHouseUseCase;
  let factoryApiService: FactoryApiService;
  let warehouseApiService: any;

  beforeEach(() => {
    warehouseApiService = jasmine.createSpyObj('WarehouseApiService', ['getById', 'getAll']);
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiWareHouse']);
    (factoryApiService.createApiWareHouse as jasmine.Spy).and.returnValue(warehouseApiService);
    useCase = new GetWareHouseUseCase(factoryApiService);
  });

  it('should call getById function of the repository and return an Observable with the warehouse model', () => {
    const warehouseId = '6436f3a786698ee0a7722704';

    const warehouse: WareHouseModel = {
      _id: "6436f3a786698ee0a7722704",
      name: "Vice City",
      address: "Miami, USA",
      phone: "3050009660028"
  };

    (warehouseApiService.getById as jasmine.Spy).and.returnValue(of(warehouse));

    useCase.getWareHouseById(warehouseId).subscribe(result => {
      expect(result).toEqual(warehouse);
      expect(warehouseApiService.getById).toHaveBeenCalledWith(warehouseId);
    });
  });

  it('should call getAll function of the repository and return an Observable with an array of warehouse models', () => {
    const warehouses: WareHouseModel[] = [
      {
        _id: "6436f3a786698ee0a7722704",
        name: "Vice City",
        address: "Miami, USA",
        phone: "3050009660028"
    },
    {
        _id: "64370b14595ec1e6281fc6bc",
        name: "Vice City",
        address: "Miami, USA",
        phone: "3050009660028"
    }
    ];

    (warehouseApiService.getAll as jasmine.Spy).and.returnValue(of(warehouses));

    useCase.getAllWareHouse().subscribe(result => {
      expect(result).toEqual(warehouses);
      expect(warehouseApiService.getAll).toHaveBeenCalled();
    });
  });
});

