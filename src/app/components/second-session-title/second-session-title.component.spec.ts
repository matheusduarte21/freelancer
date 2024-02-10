import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSessionTitleComponent } from './second-session-title.component';

describe('SecondSessionTitleComponent', () => {
  let component: SecondSessionTitleComponent;
  let fixture: ComponentFixture<SecondSessionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSessionTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSessionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
