import { of } from "rxjs";
import { GetInventoryUseCase } from "../get-inventory.use-case";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { InventoryModel } from "src/app/domain/model/i-inventory.model";

describe('GetInventoryUseCase', () => {
    let useCase: GetInventoryUseCase;
    let factoryApiService: FactoryApiService;
  
    beforeEach(() => {
      factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiInventory']);
      useCase = new GetInventoryUseCase(factoryApiService);
    });
  
    it('should call getById function of the api service and return an Observable with the inventory model', () => {
      const inventoryId = '1234';

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
        getById: () => of(inventoryModel)
      });
  
      useCase.getInventoryById(inventoryId).subscribe(result => {
        expect(result).toEqual(inventoryModel);
        expect(factoryApiService.createApiInventory).toHaveBeenCalled();
      });
    });
  
    it('should call getAll function of the api service and return an Observable with an array of inventory models', () => {
      const inventoryModels: InventoryModel[] = [
        {
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
          },
          {
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
          },
      ];
      (factoryApiService.createApiInventory as jasmine.Spy).and.returnValue({
        getAll: () => of(inventoryModels)
      });
  
      useCase.getAllInventory().subscribe(result => {
        expect(result).toEqual(inventoryModels);
        expect(factoryApiService.createApiInventory).toHaveBeenCalled();
      });
    });
  });
  