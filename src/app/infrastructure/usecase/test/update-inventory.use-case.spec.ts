import { TestBed } from '@angular/core/testing';
import {  of } from 'rxjs';
import { UpdateInventoryUseCase } from '../update-inventory.use.case';
import { FactoryApiService } from '../../global-factory-api/factory-api.service';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { QuantityInventoryDTO } from 'src/app/domain/commands/quantity-inventory.dto';


describe('UpdateInventoryUseCase', () => {
  let useCase: UpdateInventoryUseCase;
  let factoryApiServiceSpy: jasmine.SpyObj<FactoryApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FactoryApiService', ['createApiInventory']);
    TestBed.configureTestingModule({
      providers: [
        UpdateInventoryUseCase,
        { provide: FactoryApiService, useValue: spy }
      ]
    });
    useCase = TestBed.inject(UpdateInventoryUseCase);
    factoryApiServiceSpy = TestBed.inject(FactoryApiService) as jasmine.SpyObj<FactoryApiService>;
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  describe('updateInventory', () => {
    it('should call factoryApiService.update with the correct arguments', () => {
      const id = '64381aed595ec1e6281fc750';

      const inventory: InventoryModel = {
        
        _id: "64381aed595ec1e6281fc750",
        product: {
            _id: "64362c73c428f8900ce9bd55",
            brand: "Storm",
        description: "Figure action Sub-Zero Mortal Kombat",
            price: 7080,
            photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
        },
        warehouse: {
            _id: "64370b14595ec1e6281fc6bc",
            name: "Vice City",
            address: "Miami, USA",
            phone: "3050009660028"
        },
        level: "LOW",
        quantity: 5
    };

      const expectedObservable = of(inventory);
      factoryApiServiceSpy.createApiInventory.and.returnValue({
        update: jasmine.createSpy().and.returnValue(expectedObservable)
      });

      const result = useCase.updateInventory(id, inventory);

      expect(factoryApiServiceSpy.createApiInventory).toHaveBeenCalledOnceWith();
      expect(factoryApiServiceSpy.createApiInventory().update).toHaveBeenCalledOnceWith(id, inventory);
      expect(result).toEqual(expectedObservable);
    });
  });

  describe('updateQuantityInventory', () => {
    it('should call factoryApiService.updateQuantity with the correct arguments', () => {
      const quantityInventory: QuantityInventoryDTO = {
        _id: '64381aed595ec1e6281fc750',
        quantity: 5 
    };
      const inventory: InventoryModel = {
        _id: "64381aed595ec1e6281fc750",
        product: {
            _id: "64362c73c428f8900ce9bd55",
            brand: "Storm",
        description: "Figure action Sub-Zero Mortal Kombat",
            price: 7080,
            photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
        },
        warehouse: {
            _id: "64370b14595ec1e6281fc6bc",
            name: "Vice City",
            address: "Miami, USA",
            phone: "3050009660028"
        },
        level: "LOW",
        quantity: 5
    };
      const expectedObservable = of(inventory);
      factoryApiServiceSpy.createApiInventory.and.returnValue({
        updateQuantity: jasmine.createSpy().and.returnValue(expectedObservable)
      });

      const result = useCase.updateQuantityInventory(quantityInventory);

      expect(factoryApiServiceSpy.createApiInventory).toHaveBeenCalledOnceWith();
      expect(factoryApiServiceSpy.createApiInventory().updateQuantity).toHaveBeenCalledOnceWith(quantityInventory);
      expect(result).toEqual(expectedObservable);
    });
  });
});

