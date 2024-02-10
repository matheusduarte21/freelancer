import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselTattoComponent } from './carrousel-tatto.component';

describe('CarrouselTattoComponent', () => {
  let component: CarrouselTattoComponent;
  let fixture: ComponentFixture<CarrouselTattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselTattoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselTattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
