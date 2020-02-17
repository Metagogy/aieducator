import { TestBed, async, inject } from '@angular/core/testing';

import { OppguardGuard } from './oppguard.guard';

describe('OppguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OppguardGuard]
    });
  });

  it('should ...', inject([OppguardGuard], (guard: OppguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
