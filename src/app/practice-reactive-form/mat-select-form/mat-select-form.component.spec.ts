import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectFormComponent } from './mat-select-form.component';

describe('MatSelectFormComponent', () => {
  let component: MatSelectFormComponent;
  let fixture: ComponentFixture<MatSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSelectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
