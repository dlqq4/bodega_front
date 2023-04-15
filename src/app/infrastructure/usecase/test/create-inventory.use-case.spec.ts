import { ProductModel } from "src/app/domain/model/i-product.model";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { of } from "rxjs";
import { InventoryDTO } from "src/app/domain/commands/inventory.dto";
import { CreateInventoryUseCase } from "../create-inventory.use-case";
import { InventoryModel } from "src/app/domain/model/i-inventory.model";


describe('CreateInventoryUseCase', () => {
  let useCase: CreateInventoryUseCase;
  let factoryApiService: FactoryApiService;

  beforeEach(() => {
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiInventory']);
    useCase = new CreateInventoryUseCase(factoryApiService);
  });

  it('should call create function of the api service and return an Observable with the created inventory model', () => {
    const inventoryDTO: InventoryDTO = { 

      product : '1234',
      warehouse: '5678',
      level: 'LOW',
      quantity: 22,
  

    };

    const inventoryModel: InventoryModel = {
      product: {
        brand: "Marvel",
        description: "Figure action Ryu Street Fighter",
        price: 9080,
        photo: "https://i.pinimg.com/564x/2a/24/f7/2a24f77d8fb55061fbf152154a3f8a2f.jpg"
      },
      warehouse: {
        name: "Los Santos",
        address: "California, USA",
        phone: "0947890223263"
      },
      level: "HIGH",
      quantity: 200
    };

    (factoryApiService.createApiInventory as jasmine.Spy).and.returnValue({
      create: () => of(inventoryModel)
    });

    useCase.createInventory(inventoryDTO).subscribe(result => {
      expect(result).toEqual(inventoryModel);
      expect(factoryApiService.createApiInventory).toHaveBeenCalled();
    });
  });
});

  