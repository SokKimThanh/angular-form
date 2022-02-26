import { TestBed } from '@angular/core/testing';

import { OverlayEffectService } from './overlay-effect.service';

describe('OverlayEffectService', () => {
  let service: OverlayEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
