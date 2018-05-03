/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntriesService } from './entries.service';

describe('Service: EntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntriesService]
    });
  });

  it('should ...', inject([EntriesService], (service: EntriesService) => {
    expect(service).toBeTruthy();
  }));
});
