import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BusinesstoolsapiService {

  constructor(private http: HttpClient) { }

  public getData(id: number) {
    return this.http.get('http://localhost:10010/bmc/' + id.toString());
  }

}
