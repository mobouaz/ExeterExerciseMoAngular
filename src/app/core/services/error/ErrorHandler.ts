import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
export class ErrorHandlerUtil {

    constructor(private httpClient: HttpClient) { }
    
    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  }