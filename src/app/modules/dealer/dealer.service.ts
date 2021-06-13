import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BasehttpService } from 'src/app/core/services/http/basehttp.service';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class DealerService extends BasehttpService{
  baseUrl: string = "https://exeterexerciseapi20210612231239.azurewebsites.net/";
  get<DealerResponse>(): Observable<DealerResponse> {
    var url = this.baseUrl + "api/dealers/";
    return this.http.get<DealerResponse>(url).pipe(
      catchError((err) => {
        console.log('error caught in dealer service')
        console.error(err);

     

        return throwError(err);   
      })
    );
  }
  //base url can be injected ex: http: HttpClient,  @Inject('BASE_URL') baseUrl: string)
  constructor(http: HttpClient) {
    super(http);
  }
}


