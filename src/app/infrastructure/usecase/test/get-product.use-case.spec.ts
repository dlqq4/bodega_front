import { of } from "rxjs"; import { GetProductUseCase } from "../get-product.use-case";
import { ProductApiService } from "../../apis/product-api.service";
import { ProductModel } from "src/app/domain/model/i-product.model";
import { FactoryApiService } from "../../global-factory-api/factory-api.service";



describe('GetProductUseCase', () => {
  let useCase: GetProductUseCase;
  let productApiService: ProductApiService;
  let factoryApiService: FactoryApiService;

  beforeEach(() => {
    productApiService = jasmine.createSpyObj('ProductApiService', ['getById', 'getAll']);
    factoryApiService = jasmine.createSpyObj('FactoryApiService', ['createApiProduct']);
    (factoryApiService.createApiProduct as jasmine.Spy).and.returnValue(productApiService);
    useCase = new GetProductUseCase(factoryApiService);
  });

  it('should call getById function of the repository and return an Observable with the product model', () => {
    const productId = '1234';
    const product: ProductModel = {
      brand: "Storm",
      description: "Figure action Sub-Zero Mortal Kombat",
      price: 7080,
      photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
    };
    (productApiService.getById as jasmine.Spy).and.returnValue(of(product));

    useCase.getProductById(productId).subscribe(result => {
      expect(result).toEqual(product);
      expect(productApiService.getById).toHaveBeenCalledWith(productId);
    });
  });

  it('should call getAll function of the repository and return an Observable with an array of product models', () => {
    const products: ProductModel[] = [
      {
        _id: "64362c73c428f8900ce9bd55",
        brand: "Storm",
        description: "Figure action Sub-Zero Mortal Kombat",
        price: 7080,
        photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
      },
      {
        _id: "64383080595ec1e6281fc7bd",
        brand: "Storm",
        description: "Figure action Ryu Street Fhigter",
        price: 6080,
        photo: "https://i.pinimg.com/564x/2a/24/f7/2a24f77d8fb55061fbf152154a3f8a2f.jpg"
      }
    ];

    (productApiService.getAll as jasmine.Spy).and.returnValue(of(products));

    useCase.getAllproduct().subscribe(result => {
      expect(result).toEqual(products);
      expect(productApiService.getAll).toHaveBeenCalled();
    });
  });
});
