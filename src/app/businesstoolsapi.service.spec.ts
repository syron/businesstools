import { TestBed, inject } from '@angular/core/testing';

import { BusinesstoolsapiService } from './businesstoolsapi.service';

describe('BusinesstoolsapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinesstoolsapiService]
    });
  });

  it('should be created', inject([BusinesstoolsapiService], (service: BusinesstoolsapiService) => {
    expect(service).toBeTruthy();
  }));
});
