import { TestBed, inject } from '@angular/core/testing';

import { TimeoutInterceptorService } from './timeout-interceptor.service';

describe('TimeoutInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeoutInterceptorService]
    });
  });

  it('should be created', inject([TimeoutInterceptorService], (service: TimeoutInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
