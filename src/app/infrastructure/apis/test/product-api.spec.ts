import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { ProductApiService } from "../product-api.service";

describe('ProductApiService', () => {
    let service: ProductApiService;
    let httpMock: HttpTestingController;

  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProductApiService],
      });
  
      service = TestBed.inject(ProductApiService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
      });
    
      it('should get all product', () => {
        const product = [
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
    
        service.getAll().subscribe(data => {
          expect(data.length).toBe(2);
          expect(data).toEqual(product);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/product/find-all-product`);
        expect(req.request.method).toBe("GET");
        req.flush(product);
      });
    
  
      it('should get product by id', () => {

        const _id: string = "64362c73c428f8900ce9bd55";

        const product = {
            _id: "64362c73c428f8900ce9bd55",
            brand: "Storm",
            description: "Figure action Sub-Zero Mortal Kombat",
            price: 7080,
            photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
          };
    
        service.getById(_id).subscribe(data => {
          expect(data).toEqual(product);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/product/find-by-id/`+_id);
        expect(req.request.method).toBe("GET");
        req.flush(product);
      });


      it('should update product', () => {
        const product = {
            _id: "64362c73c428f8900ce9bd55",
            brand: "Storm",
            description: "Figure action Sub-Zero Mortal Kombat",
            price: 7080,
            photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
          };
    
        service.update('1', product).subscribe(data => {
          expect(data).toEqual(product);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/product/update-product/1`);
        expect(req.request.method).toBe("PUT");
        expect(req.request.body).toEqual(product);
        req.flush(product);
      });
      

      it('should create product', () => {
        const product = {

            brand: 'Storm',
            description: 'El muñeco',
            price: 200,
            photo: 'Esta',
    
          };
    
        service.create(product).subscribe(data => {
          expect(data._id).toBeDefined();
          expect(data.brand).toEqual('Storm');
          expect(data.description).toEqual('El muñeco');
          expect(data.price).toEqual(200);
          expect(data.photo).toEqual('Esta');
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/product/create-product`);
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual(product);
        const productWithId = {

            _id : '1234',
            brand: 'Storm',
            description: 'El muñeco',
            price: 200,
            photo: 'Esta',
    
          };
        req.flush(productWithId);
      });

      
      it('should delete product', () => {
        const id = '1';
    
        service.delete(id).subscribe(data => {
          expect(data).toBeTruthy();
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/product/delete-product/`);
        expect(req.request.method).toBe("DELETE");
        expect(req.request.body).toEqual({_id: id});
        req.flush(true);
      });


    });


