import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeReactiveFormComponent } from './practice-reactive-form.component';

describe('PracticeReactiveFormComponent', () => {
  let component: PracticeReactiveFormComponent;
  let fixture: ComponentFixture<PracticeReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
