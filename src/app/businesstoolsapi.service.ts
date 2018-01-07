import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanvasData } from './canvas-data'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinesstoolsapiService {

  constructor(private http: HttpClient) { }

  public getData(id: number): Observable<Object> {
    return this.http.get('http://localhost:10010/bmc/' + id.toString());
  }

}
