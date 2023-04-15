import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWareHouseComponent } from '../../../presentation/warehouse-components/view-warehouse/view-warehouse.component';

describe('ViewWareHouseComponent', () => {
  let component: ViewWareHouseComponent;
  let fixture: ComponentFixture<ViewWareHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWareHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
