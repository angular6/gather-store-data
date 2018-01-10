import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

import { Dsu } from './shared/models/dsu.model';
import { Site } from './shared/models/site.model';
import { DsuMap } from './shared/models/dsu-map.model';

const API_URL = "http://localhost:3000"



@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  public putDsu(dsu: Dsu): Observable < Dsu > {
    return this.http.put < Dsu > (API_URL + '/v1/api/dsus', dsu)
  }

  public putSite(site: Site): Observable < Site > {
    return this.http.put < Site > (API_URL + '/v1/api/sites', site)
  }

  public getDsus(): Observable < DsuMap > {
    return this.http.get < DsuMap > (API_URL + '/v1/api/dsus')
  }

}
