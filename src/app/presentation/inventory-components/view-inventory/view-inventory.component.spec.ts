import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ViewInventoryComponent } from './view-inventory.component';
import { GetInventoryUseCase } from 'src/app/infrastructure/usecase/get-inventory.use-case';
import { DeleteInventoryUseCase } from 'src/app/infrastructure/usecase/delete-inventory.use-case';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { Router } from '@angular/router';

describe('ViewInventoryComponent', () => {
  let component: ViewInventoryComponent;
  let fixture: ComponentFixture<ViewInventoryComponent>;
  let getInventoryUseCaseSpy: jasmine.SpyObj<GetInventoryUseCase>;
  let deleteInventoryUseCaseSpy: jasmine.SpyObj<DeleteInventoryUseCase>;
  let routerSpy: jasmine.SpyObj<Router>;

  const inventoryModelMock: InventoryModel[] = [
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

  beforeEach(async () => {
    const getInventoryUseCaseMock = jasmine.createSpyObj('GetInventoryUseCase', ['getAllInventory']);
    const deleteInventoryUseCaseMock = jasmine.createSpyObj('DeleteInventoryUseCase', ['deleteInventory']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ViewInventoryComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: GetInventoryUseCase, useValue: getInventoryUseCaseMock },
        { provide: DeleteInventoryUseCase, useValue: deleteInventoryUseCaseMock },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    getInventoryUseCaseSpy = TestBed.inject(GetInventoryUseCase) as jasmine.SpyObj<GetInventoryUseCase>;
    deleteInventoryUseCaseSpy = TestBed.inject(DeleteInventoryUseCase) as jasmine.SpyObj<DeleteInventoryUseCase>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllInventory method on component initialization', () => {
    const getAllInventorySpy = spyOn(component, 'getAllInventory');
    component.ngOnInit();
    expect(getAllInventorySpy).toHaveBeenCalled();
  });

  it('should get all inventory', () => {
    getInventoryUseCaseSpy.getAllInventory.and.returnValue(of(inventoryModelMock));
    component.getAllInventory();
    expect(component.inventorys).toEqual(inventoryModelMock);
  });


  it('should delete inventory', () => {
    const inventoryIdToDelete = 'test-id-1';
    deleteInventoryUseCaseSpy.deleteInventory.and.returnValue(of(true));
    const alertSpy = spyOn(window, 'alert');
    component.deleteInventory(inventoryIdToDelete);
    expect(deleteInventoryUseCaseSpy.deleteInventory).toHaveBeenCalledWith(inventoryIdToDelete);
    expect(alertSpy).toHaveBeenCalledWith('¡Inventory Delete OK!');
  });

  it('should call deleteInventory with correct id', () => {
    const testId = 'test-id';
    deleteInventoryUseCaseSpy.deleteInventory.and.returnValue(of(true));
    component.deleteInventory(testId);
    expect(deleteInventoryUseCaseSpy.deleteInventory).toHaveBeenCalledWith(testId);
  });



  it('should call deleteInventoryUseCase with correct ID and show success message', () => {
    const inventoryId = '12345';
  
    spyOn(deleteInventoryUseCaseSpy, 'deleteInventory').and.returnValue(of(true));
    spyOn(window, 'alert');
  
    component.deleteInventory(inventoryId);
  
    expect(deleteInventoryUseCaseSpy.deleteInventory).toHaveBeenCalledWith(inventoryId);
    expect(window.alert).toHaveBeenCalledWith('¡Inventory Delete OK!');
  });

  it('should navigate to update inventory', () => {
    const testId = 'test-id';
    component.goToUpdateInventory(testId);
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/inventory/app-update-inventory/${testId}`]);
  });

});