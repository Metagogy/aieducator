import { TestBed } from '@angular/core/testing';

import { TestandtopicService } from './testandtopic.service';

describe('TestandtopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestandtopicService = TestBed.get(TestandtopicService);
    expect(service).toBeTruthy();
  });
});
