import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const API_URL = "http://localhost:3000"


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public post(x:any):Observable<any>{
  	return this.http.put<any>(API_URL + '/v1/api/dsus', x)
  }

  public post2(x:any):Observable<any>{
  	return this.http.put<any>(API_URL + '/v1/api/sites', x)
  }

  public get():Observable<any> {
  	return this.http.get<any>(API_URL + '/v1/api/dsus')
  }

}
