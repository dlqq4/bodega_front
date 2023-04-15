import { TestBed } from "@angular/core/testing";
import { InventoryApiService } from "../inventory-api.service";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";

describe('InventoryApiService', () => {
    let service: InventoryApiService;
    let httpMock: HttpTestingController;

  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [InventoryApiService],
      });
  
      service = TestBed.inject(InventoryApiService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
      });
    
      it('should get all inventory', () => {
        const inventory = [
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
              }
        ];
    
        service.getAll().subscribe(data => {
          expect(data.length).toBe(2);
          expect(data).toEqual(inventory);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/inventory/find-all-inventory`);
        expect(req.request.method).toBe("GET");
        req.flush(inventory);
      });
    
  
      it('should get inventory by id', () => {
        const inventory = {
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
    
        service.getById('1').subscribe(data => {
          expect(data).toEqual(inventory);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/inventory/find-by-id/`);
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual({_id: '1'});
        req.flush(inventory);
      });


      it('should update inventory', () => {
        const inventory = {
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
    
        service.update('1', inventory).subscribe(data => {
          expect(data).toEqual(inventory);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/inventory/update-inventory/1`);
        expect(req.request.method).toBe("PUT");
        expect(req.request.body).toEqual(inventory);
        req.flush(inventory);
      });
      

      it('should create inventory', () => {
        const inventory = { 

            product : '1234',
            warehouse: '5678',
            level: 'LOW',
            quantity: 22,
        
      
          };
    
        service.create(inventory).subscribe(data => {
          expect(data._id).toBeDefined();
          expect(data.level).toEqual('LOW');
          expect(data.quantity).toEqual(22);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/inventory/create-inventory`);
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual(inventory);
        const inventoryWithId = { 

            _id: '1234',
            product : '1234',
            warehouse: '5678',
            level: 'LOW',
            quantity: 22,
            
          };
        req.flush(inventoryWithId);
      });

      it('should delete inventory', () => {
        const id = '1';
    
        service.delete(id).subscribe(data => {
          expect(data).toBeTruthy();
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/inventory/delete-inventory/`);
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual({_id: id});
        req.flush(true);
      });


    });


