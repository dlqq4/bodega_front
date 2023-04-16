import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { CreateProductUseCase } from 'src/app/infrastructure/usecase/create-product.use-case';
import { AddProductComponent } from './add-product.component';
import { HttpErrorResponse } from '@angular/common/http';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let createProductUseCaseSpy: jasmine.SpyObj<CreateProductUseCase>;
  let routerSpy: jasmine.SpyObj<Router>;

  const productModelMock: ProductModel = {
    brand: 'Test Brand',
    description: 'Test Description',
    price: 9.99,
    photo: 'test-photo-url'
  };

  beforeEach(async () => {
    const createProductUseCaseMock = jasmine.createSpyObj('CreateProductUseCase', ['createProduct']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: CreateProductUseCase, useValue: createProductUseCaseMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    createProductUseCaseSpy = TestBed.inject(CreateProductUseCase) as jasmine.SpyObj<CreateProductUseCase>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a valid product form', () => {
    const { productForm } = component;
    expect(productForm.valid).toBeFalse();

    const brandControl = productForm.get('brand');
    brandControl?.setValue(productModelMock.brand);
    expect(brandControl?.valid).toBeTrue();

    const descriptionControl = productForm.get('description');
    descriptionControl?.setValue(productModelMock.description);
    expect(descriptionControl?.valid).toBeTrue();

    const priceControl = productForm.get('price');
    priceControl?.setValue(productModelMock.price);
    expect(priceControl?.valid).toBeTrue();

    const photoControl = productForm.get('photo');
    photoControl?.setValue(productModelMock.photo);
    expect(photoControl?.valid).toBeTrue();

    expect(productForm.valid).toBeTrue();
  });
 

  it('should call createProductUseCase with correct product', () => {
   const { productForm } = component;
   productForm.setValue(productModelMock);

    createProductUseCaseSpy.createProduct.and.returnValue(of(productModelMock));

    component.createProduct();

    expect(createProductUseCaseSpy.createProduct).toHaveBeenCalledWith(productModelMock);
  });




});

