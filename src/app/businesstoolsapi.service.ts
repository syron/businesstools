import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanvasData } from './canvas-data'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinesstoolsapiService {

  constructor(private http: HttpClient) { }

  public getData(id: number): Observable<Object> {
    return this.http.get('http://localhost:10010/bmc/' + id.toString());
  }

  public addItem(id: number): Observable<Object> {
    var contentHeaders = new HttpHeaders();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:10010/bmc/' + id.toString() + '/items', { }, {
      headers: contentHeaders
      , responseType: 'json'
    } );
  }
}
