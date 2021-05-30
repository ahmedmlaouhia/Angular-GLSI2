import { TestBed } from '@angular/core/testing';

import { ProcessHttpmsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  let service: ProcessHttpmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessHttpmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
