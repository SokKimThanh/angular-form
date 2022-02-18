import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectCustomComponent } from './mat-select-custom.component';

describe('MatSelectCustomComponent', () => {
  let component: MatSelectCustomComponent;
  let fixture: ComponentFixture<MatSelectCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSelectCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
