import { ProductModel } from "src/app/domain/model/i-product.model";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";
import { CreateProductUseCase } from "../create-product.use-case";
import { ProductApiService } from "../../apis/product-api.service";
import { of } from "rxjs";


describe('CreateProductUseCase', () => {
    let useCase: CreateProductUseCase;
    let factoryApiService: FactoryApiService;
  
    beforeEach(() => {
      factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiProduct']);
      useCase = new CreateProductUseCase(factoryApiService);
    });
  
    it('should call create function of the api service and return an Observable with the created product model', () => {
      const product: ProductModel = {

        brand: 'Storm',
        description: 'El muñeco',
        price: 200,
        photo: 'Esta',

      };

      const createdProduct: ProductModel = { 
        ...product,

      };
      
      (factoryApiService.createApiProduct as jasmine.Spy).and.returnValue({
        create: () => of(createdProduct)
      });
  
      useCase.createProduct(product).subscribe(result => {
        expect(result).toEqual(createdProduct);
        expect(factoryApiService.createApiProduct).toHaveBeenCalled();
      });
    });
  });
  