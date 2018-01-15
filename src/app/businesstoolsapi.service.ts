import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanvasData } from './canvas-data'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinesstoolsapiService {

  baseAddress: string = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  public getBusinessModelCanvasList(): Observable<Object> {
    return this.http.get<Array<CanvasData>>(this.baseAddress + 'businessmodelcanvas/');
  }

  public getBusinessModelCanvas(id: string): Observable<CanvasData> {
    return this.http.get<CanvasData>(this.baseAddress + 'businessmodelcanvas/' + id);
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

  public saveBusinesssModelCanvas(data: CanvasData): Observable<Object> {
    var url = this.baseAddress + 'businessmodelcanvas/' + data.canvasId;
    console.log(url, data);
    return this.http.patch(url, data);
  }
}
