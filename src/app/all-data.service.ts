import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'

@Injectable()
export class AllDataService {
  public url="https://restcountries.eu/rest/v2";

  constructor(private _http:HttpClient) {
    console.log("Service is called")
   }


  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //all region api call.
  public allregions(region): Observable<any> {
    let myResponse = this._http.get(`https://restcountries.eu/rest/v2/region/${region}`);
    console.log(myResponse);
    return myResponse;


  }
  //single country api call.
  public getCountry(country): Observable<any> {
    let myResponse = this._http.get(`${this.url}/name/${country}`);
    console.log(myResponse);
    return myResponse;


  }
  //currency filter api call.
  currency(currency) {

    let myResponse = this._http.get(`${this.url}/currency/${currency}`);
    console.log(myResponse);
    return myResponse;

  }
  //langauge filter api call.
  language(language) {
    let myResponse = this._http.get(`${this.url}/lang/${language}`);
    console.log(myResponse);
    return myResponse;
  }
}
