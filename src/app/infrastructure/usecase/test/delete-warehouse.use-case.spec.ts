import { of } from "rxjs";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { DeleteWareHouseUseCase } from "../delete-warehouse.use-case";


describe('DeleteWareHouseUseCase', () => {
    let useCase: DeleteWareHouseUseCase;
    let factoryApiService: jasmine.SpyObj<FactoryApiService>;
  
    beforeEach(() => {
      factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiWareHouse']);
      const apiWareHouse = jasmine.createSpyObj('apiWareHouse', ['delete']);
      factoryApiService.createApiWareHouse.and.returnValue(apiWareHouse);
      useCase = new DeleteWareHouseUseCase(factoryApiService);
    });
  
    it('should call delete function of the API and return an Observable with boolean value', () => {
      const id = '1234';
      const success = true;
      (factoryApiService.createApiWareHouse().delete as jasmine.Spy).and.returnValue(of(success));
  
      useCase.deleteWareHouse(id).subscribe(result => {
        expect(result).toBe(success);
        expect(factoryApiService.createApiWareHouse().delete).toHaveBeenCalledWith(id);
      });
    });
  });