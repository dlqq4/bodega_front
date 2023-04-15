import { of } from "rxjs";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { DeleteInventoryUseCase } from "../delete-inventory.use-case";



describe('DeleteInventoryUseCase', () => {
    let useCase: DeleteInventoryUseCase;
    let factoryApiService: jasmine.SpyObj<FactoryApiService>;
  
    beforeEach(() => {
      factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiInventory']);
      const apiInventory = jasmine.createSpyObj('apiInventory', ['delete']);
      factoryApiService.createApiInventory.and.returnValue(apiInventory);
      useCase = new DeleteInventoryUseCase(factoryApiService);
    });
  
    it('should call delete function of the API and return an Observable with boolean value', () => {
      const id = '1234';
      const success = true;
      (factoryApiService.createApiInventory().delete as jasmine.Spy).and.returnValue(of(success));
  
      useCase.deleteInventory(id).subscribe(result => {
        expect(result).toBe(success);
        expect(factoryApiService.createApiInventory().delete).toHaveBeenCalledWith(id);
      });
    });
  });