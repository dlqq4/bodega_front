
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { UpdateProductUseCase } from '../update-product.use.case';
import { FactoryApiService } from '../../global-factory-api/factory-api.service';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { ProductApiService } from '../../apis/product-api.service';

describe('UpdateProductUseCase', () => {
  let useCase: UpdateProductUseCase;
  let factoryApiService: FactoryApiService;
  let productApiService: ProductApiService;

  beforeEach(() => {
    productApiService = jasmine.createSpyObj('ProductApiService', ['update']);
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiProduct']);
    (factoryApiService.createApiProduct as jasmine.Spy).and.returnValue(productApiService);
    useCase = new UpdateProductUseCase(factoryApiService);
  });

  it('should call update function of the repository and return an Observable with the updated product model', () => {

    const productId = '1234';

    const updatedProduct: ProductModel = {
      _id: '1234',
      brand: "Storm",
      description: "Figure action Sub-Zero Mortal Kombat",
      price: 8000,
      photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
    };

    (productApiService.update as jasmine.Spy).and.returnValue(of(updatedProduct));

    useCase.updateProduct(productId, updatedProduct).subscribe(result => {
      expect(result).toEqual(updatedProduct);
      expect(productApiService.update).toHaveBeenCalledWith(productId, updatedProduct);
    });
  });
});
