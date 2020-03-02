import { TestBed } from '@angular/core/testing';

import { InteractionserviceService } from './interactionservice.service';

describe('InteractionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteractionserviceService = TestBed.get(InteractionserviceService);
    expect(service).toBeTruthy();
  });
});
