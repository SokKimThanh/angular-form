import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayEffectComponent } from './overlay-effect.component';

describe('OverlayEffectComponent', () => {
  let component: OverlayEffectComponent;
  let fixture: ComponentFixture<OverlayEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
