import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from "@angular/http";

import "rxjs/Rx";
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from "./message.service";
import { Doctor } from "../doctor";
import { Tasks } from "../tasks";


@Injectable()
export class DoctorService { 

  constructor(private messageService: MessageService,
              private httpClient: HttpClient,
              private http: Http
              ) { }

  private urlDoctors = "https://jsonplaceholder.typicode.com/users";

  getDoctors() {
    return this.http.get(this.urlDoctors)
      .map(data => data.json())
        .pipe(
          tap(doctors => this.log("feched doctors")),
          catchError(this.handleError("getDoctors", []))
      );
  }

  getDoctorById(id: number) {
    return this.http.get(this.urlDoctors + "/" + id)
      .map(data => data.json())
        .pipe(
          tap(doctor => this.log("fetched doctor id=" + id)),
          catchError(this.handleError("getDoctorById id=" +id))
      );
  }

  getTasksById(id: number) {
    return this.http.get(this.urlDoctors + "/" + id + "/todos")
      .map(data => data.json())
        .pipe(
          tap(tasks => this.log("fetched tasks id=" + id)),
          catchError(this.handleError("getTasksById id=" + id, []))
      );
  }


  private log(message: string) {
    this.messageService.add("DoctorService: " + message);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
