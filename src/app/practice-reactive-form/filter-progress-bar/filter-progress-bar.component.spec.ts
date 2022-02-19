import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProgressBarComponent } from './filter-progress-bar.component';

describe('FilterProgressBarComponent', () => {
  let component: FilterProgressBarComponent;
  let fixture: ComponentFixture<FilterProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
