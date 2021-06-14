import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BasehttpService } from 'src/app/core/services/http/basehttp.service';
import {CustomerCenterSectionesponse } from './models/customercentersectionresponse'

@Injectable({
  providedIn: 'root'
})
export class CustomercenterService extends BasehttpService{
  baseUrl: string = "https://exeterexerciseapi20210612231239.azurewebsites.net/";
  get<CustomerCenterSectionesponses>(): Observable<CustomerCenterSectionesponses> {
    var url = this.baseUrl + "api/customers/";
    return this.http.get<CustomerCenterSectionesponses>(url).pipe(
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
