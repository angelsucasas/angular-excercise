import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { HttpModule } from './http.module'
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: HttpModule
})
export class HttpService {

  private headers = new HttpHeaders();
  
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public get(
      url:string
    ){
    return this.http.get(url).pipe(retry(3),catchError(this.handleError));
  }

  public post(url:string,body:{}){
    return this.http.post(url,body).pipe(retry(3),catchError(this.handleError));
  }

}