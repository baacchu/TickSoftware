import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PrimeResponse} from '../models/prime-response';



@Injectable({
  providedIn: 'root'
})
export class PrimeService {

  public primeWebApiUrl = 'http://localhost:5052/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  /** GET Prime Numbers from the  Web API  server */
  getPrimeNumbers(maxRangeVal : number): Observable<PrimeResponse> {
    let fullApiUrl = `${this.primeWebApiUrl}PrimeCalculator/GetPrimeNumbers?maxPrimeNumber=${maxRangeVal}`;
    return this.http.get<PrimeResponse>(fullApiUrl)
    .pipe(map(response => response),
        catchError(this.handleError<any>('getPrimeNumbers'))
    )
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      if (error.error instanceof Event) {
        throw error.error;
      }
      const message = `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };

  }


}
