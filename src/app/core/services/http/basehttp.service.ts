import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlerUtil } from '../error/ErrorHandler'

@Injectable({
  providedIn: 'root'
})
export abstract class BasehttpService   {
//base url can be injected (protected http: HttpClient, protected baseUrl: string) 
  constructor(protected http: HttpClient) {
  }
    abstract get<T>(): Observable<T>;
}
