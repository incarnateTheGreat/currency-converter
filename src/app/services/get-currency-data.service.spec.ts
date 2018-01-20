import { TestBed, inject } from '@angular/core/testing';

import { GetCurrencyDataService } from './get-currency-data.service';
import { Http } from '@angular/http';

describe('GetCurrencyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCurrencyDataService, {provide: Http}]
    });
  });

  it('should be created', inject([GetCurrencyDataService], (service: GetCurrencyDataService) => {
    expect(service).toBeTruthy();
  }));
});
