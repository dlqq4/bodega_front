import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { WareHouseApiService } from "../warehouse-api.service";


describe('WareHouseApiService', () => {
    let service: WareHouseApiService;
    let httpMock: HttpTestingController;

  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WareHouseApiService],
      });
  
      service = TestBed.inject(WareHouseApiService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
      });
    
      it('should get all warehouse', () => {
        const warehouse = [
          {
            _id: "6436f3a786698ee0a7722704",
            name: "Vice City",
            address: "Miami, USA",
            phone: "3050009660028"
        },
        {
            _id: "64370b14595ec1e6281fc6bc",
            name: "Vice City",
            address: "Miami, USA",
            phone: "3050009660028"
        }
        ];
    
        service.getAll().subscribe(data => {
          expect(data.length).toBe(2);
          expect(data).toEqual(warehouse);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/warehouse/find-all-wareHouse`);
        expect(req.request.method).toBe("GET");
        req.flush(warehouse);
      });
    
  
      it('should get warehouse by id', () => {

        const _id: string = "64362c73c428f8900ce9bd55";

        const warehouse = {
          _id: "64362c73c428f8900ce9bd55",
          name: "Vice City",
          address: "Miami, USA",
          phone: "3050009660028"
      };
    
        service.getById(_id).subscribe(data => {
          expect(data).toEqual(warehouse);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/warehouse/find-by-id/`+_id);
        expect(req.request.method).toBe("GET");
        req.flush(warehouse);
      });


      it('should update warehouse', () => {
        const warehouse = {
          _id: "64362c73c428f8900ce9bd55",
          name: "Vice City",
          address: "Miami, USA",
          phone: "3050009660028"
      };
    
        service.update('1', warehouse).subscribe(data => {
          expect(data).toEqual(warehouse);
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/warehouse/update-wareHouse/1`);
        expect(req.request.method).toBe("PUT");
        expect(req.request.body).toEqual(warehouse);
        req.flush(warehouse);
      });
      

      it('should create warehouse', () => {
        const warehouse = {
          _id: "64362c73c428f8900ce9bd55",
          name: "Vice City",
          address: "Miami, USA",
          phone: "3050009660028"
      };
    
        service.create(warehouse).subscribe(data => {
          expect(data._id).toBeDefined();
          expect(data.name).toEqual('Vice City');
          expect(data.address).toEqual('Miami, USA');
          expect(data.phone).toEqual('3050009660028');
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/warehouse/create-wareHouse`);
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual(warehouse);
        const warehouseWithId = {
          _id: "64362c73c428f8900ce9bd55",
          name: "Vice City",
          address: "Miami, USA",
          phone: "3050009660028"
      };
        req.flush(warehouseWithId);
      });

      
      it('should delete warehouse', () => {
        const id = '1';
    
        service.delete(id).subscribe(data => {
          expect(data).toBeTruthy();
        });
    
        const req = httpMock.expectOne(`https://gestion-bodega-backend-production.up.railway.app/warehouse/delete-wareHouse/`);
        expect(req.request.method).toBe("DELETE");
        expect(req.request.body).toEqual({_id: id});
        req.flush(true);
      });


    });


