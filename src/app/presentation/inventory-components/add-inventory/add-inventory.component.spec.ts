import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { InventoryDTO } from "src/app/domain/commands/inventory.dto";
import { ProductModel } from "src/app/domain/model/i-product.model";
import { WareHouseModel } from "src/app/domain/model/i-warehouse.model";
import { CreateInventoryUseCase } from "src/app/infrastructure/usecase/create-inventory.use-case";
import { GetProductUseCase } from "src/app/infrastructure/usecase/get-product.use-case";
import { GetWareHouseUseCase } from "src/app/infrastructure/usecase/get-warehouse.use-case";
import { AddInventoryComponent } from "./add-inventory.component";

describe('AddInventoryComponent', () => {
  let component: AddInventoryComponent;
  let fixture: ComponentFixture<AddInventoryComponent>;
  let createInventoryUseCase: CreateInventoryUseCase;
  let getProductUseCase: GetProductUseCase;
  let getWareHouseUseCase: GetWareHouseUseCase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInventoryComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: CreateInventoryUseCase,
          useValue: {
            createInventory: jasmine.createSpy('createInventory').and.returnValue(of({})),
          },
        },
        {
          provide: GetProductUseCase,
          useValue: {
            getAllproduct: jasmine.createSpy('getAllproduct').and.returnValue(of([])),
          },
        },
        {
          provide: GetWareHouseUseCase,
          useValue: {
            getAllWareHouse: jasmine.createSpy('getAllWareHouse').and.returnValue(of([])),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryComponent);
    component = fixture.componentInstance;
    createInventoryUseCase = TestBed.inject(CreateInventoryUseCase);
    getProductUseCase = TestBed.inject(GetProductUseCase);
    getWareHouseUseCase = TestBed.inject(GetWareHouseUseCase);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products', fakeAsync(() => {
    const mockProducts: ProductModel[] = [
      {
        brand: 'Product 1',
        description: 'algo',
        price: 20,
        photo: 'esta'
      },
      {
        brand: 'Product 2',
        description: 'algo',
        price: 40,
        photo: 'esta otra'
      }
    ];

    getProductUseCase.getAllproduct = jasmine.createSpy().and.returnValue(of(mockProducts));


    component.getProduct();

    expect(getProductUseCase.getAllproduct).toHaveBeenCalled();
    tick();
    expect(component.products).toEqual(mockProducts);
  }));

  it('should get warehouses', fakeAsync(() => {
    const mockWarehouses: WareHouseModel[] = [
      {
        name: 'Warehouse 1',
        address: 'Address 1',
        phone: '020202'
      },
      {
        name: 'Warehouse 2',
        address: 'Address 2',
        phone: '030303'
      }
    ];


    getWareHouseUseCase.getAllWareHouse = jasmine.createSpy().and.returnValue(of(mockWarehouses));

    component.getWareHouse();

    expect(getWareHouseUseCase.getAllWareHouse).toHaveBeenCalled();
    tick();
    expect(component.warehouses).toEqual(mockWarehouses);
  }));

  it('should create inventory', () => {
    const mockInventory: InventoryDTO = {
      product: '1',
      warehouse: '2',
      level: 'Low',
      quantity: 10
    };

    component.inventoryForm.patchValue(mockInventory);

    component.createInventory();

    expect(createInventoryUseCase.createInventory).toHaveBeenCalledWith(mockInventory);
  });
});
