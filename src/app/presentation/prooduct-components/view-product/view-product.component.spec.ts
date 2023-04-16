import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ViewProductComponent } from './view-product.component';
import { GetProductUseCase } from 'src/app/infrastructure/usecase/get-product.use-case';
import { ProductModel } from 'src/app/domain/model/i-product.model';


describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;
  let getProductUseCaseSpy: jasmine.SpyObj<GetProductUseCase>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spyProductUseCase = jasmine.createSpyObj('GetProductUseCase', ['getAllproduct']);
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ViewProductComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: GetProductUseCase, useValue: spyProductUseCase },
        { provide: Router, useValue: spyRouter }
      ]
    })
      .compileComponents();

    getProductUseCaseSpy = TestBed.inject(GetProductUseCase) as jasmine.SpyObj<GetProductUseCase>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProduct on ngOnInit', () => {
    const testResponse: ProductModel[] = [
      {
        _id: "64362c73c428f8900ce9bd55",
        brand: "Storm",
        description: "Figure action Sub-Zero Mortal Kombat",
        price: 7080,
        photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
      },
      {
        _id: "64362c73c428f8900ce9bd566",
        brand: "Storm",
        description: "Figure action Sub-Zero Mortal Kombat",
        price: 2080,
        photo: "https://i.pinimg.com/564x/9a/98/e4/9a98e44ae03ff88e88cc817a4f7f8e5b.jpg"
      }
    ];

    getProductUseCaseSpy.getAllproduct.and.returnValue(of(testResponse));
    component.ngOnInit();
    expect(getProductUseCaseSpy.getAllproduct).toHaveBeenCalled();
    expect(component.products).toEqual(testResponse);
  });

 


});
