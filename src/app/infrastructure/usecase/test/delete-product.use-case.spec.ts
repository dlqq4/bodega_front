import { of } from "rxjs";
import { DeleteProductUseCase } from "../delete-product.use-case";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";


describe('DeleteProductUseCase', () => {
    let useCase: DeleteProductUseCase;
    let factoryApiService: jasmine.SpyObj<FactoryApiService>;
  
    beforeEach(() => {
      factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiProduct']);
      const apiProduct = jasmine.createSpyObj('ApiProduct', ['delete']);
      factoryApiService.createApiProduct.and.returnValue(apiProduct);
      useCase = new DeleteProductUseCase(factoryApiService);
    });
  
    it('should call delete function of the API and return an Observable with boolean value', () => {
      const id = '1234';
      const success = true;
      (factoryApiService.createApiProduct().delete as jasmine.Spy).and.returnValue(of(success));
  
      useCase.deleteProduct(id).subscribe(result => {
        expect(result).toBe(success);
        expect(factoryApiService.createApiProduct().delete).toHaveBeenCalledWith(id);
      });
    });
  });