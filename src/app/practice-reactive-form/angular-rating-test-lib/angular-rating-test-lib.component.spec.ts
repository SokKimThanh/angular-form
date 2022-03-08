import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRatingTestLibComponent } from './angular-rating-test-lib.component';

describe('AngularRatingTestLibComponent', () => {
  let component: AngularRatingTestLibComponent;
  let fixture: ComponentFixture<AngularRatingTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRatingTestLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRatingTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
