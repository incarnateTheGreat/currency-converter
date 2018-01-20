import { TestBed, inject } from '@angular/core/testing';

import { GetCurrencyDataService } from './get-currency-data.service';

describe('GetCurrencyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCurrencyDataService]
    });
  });

  it('should be created', inject([GetCurrencyDataService], (service: GetCurrencyDataService) => {
    expect(service).toBeTruthy();
  }));
});
