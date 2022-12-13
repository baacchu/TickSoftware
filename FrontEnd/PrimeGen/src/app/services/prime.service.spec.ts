import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { PrimeService } from './prime.service';
import { PrimeResponse } from '../models/prime-response';

describe('PrimeService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: PrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ], 
      providers: [ PrimeService ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PrimeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('#getPrimeNumbers()', () => {
    let expectedResponse: any;
    let fullPath : string;

    beforeEach(() => {
      service = TestBed.inject(PrimeService);
      fullPath= `${service.primeWebApiUrl}PrimeCalculator/GetPrimeNumbers?maxPrimeNumber=5`;
      expectedResponse = {
        "rangeEnd": 5,
        "primeNumbers": [
          2,
          3
        ],
        "totalCount": 2
      }
    });
    
    it('should return expect  prime numbers', () => {
      service.getPrimeNumbers(5).subscribe({
        next: result => expect(result)
          .withContext('should return expected scores')
          .toEqual(expectedResponse),
        error: fail
      });
     
    
      const req = httpTestingController.expectOne(fullPath);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedResponse);

    });


    it('should turn 404 into a user-friendly error', () => {
      const msg = 'Deliberate 404';
      service.getPrimeNumbers(5).subscribe({
        next: data => fail('expected to fail'),
        error: error => expect(error.message).toContain(msg)
      });
      const req = httpTestingController.expectOne(fullPath);
      // respond with a 404 and the error message in the body
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });
  });

});
