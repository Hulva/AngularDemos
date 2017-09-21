import { TestBed, inject } from '@angular/core/testing';

import { SearchJsonpService } from './search-jsonp.service';

describe('SearchJsonpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchJsonpService]
    });
  });

  it('should be created', inject([SearchJsonpService], (service: SearchJsonpService) => {
    expect(service).toBeTruthy();
  }));
});
