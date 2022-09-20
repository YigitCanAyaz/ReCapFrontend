import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailModelFilterComponent } from './car-detail-model-filter.component';

describe('CarDetailModelFilterComponent', () => {
  let component: CarDetailModelFilterComponent;
  let fixture: ComponentFixture<CarDetailModelFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailModelFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailModelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
