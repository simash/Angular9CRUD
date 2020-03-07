import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  getEmployee(age : number) : any[] {
      if(age == 22){
        return [{name : 'simash'},
      {name :'tanvi'}];
      }
  }

  constructor(private http : HttpClient) {

   }

     public getData() {
      return this.http.get("https://jsonplaceholder.typicode.com/todos/").pipe(retry(2),
        catchError( err => {
          if (err.status == 401) {
              
              return EMPTY;
          } else {
              return throwError(err);
          }
     }));
      

      }
     
   }
