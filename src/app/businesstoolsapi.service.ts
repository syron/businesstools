import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanvasData } from './canvas-data'
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHeaderResponse } from '@angular/common/http/src/response';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable()
export class BusinesstoolsapiService {

  baseAddress: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private get authHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken());
  }

  public getBusinessModelCanvasList(): Observable<Array<CanvasData>> {
    return this.http.get<Array<CanvasData>>(this.baseAddress + 'businessmodelcanvas/', { headers: this.authHeader });
  }

  public getBusinessModelCanvas(id: string): Observable<CanvasData> {
    return this.http.get<CanvasData>(this.baseAddress + 'businessmodelcanvas/' + id, { headers: this.authHeader });
  }

  public updateBusinesssModelCanvas(data: CanvasData): Observable<Object> {
    var url = this.baseAddress + 'businessmodelcanvas/' + data.canvasId;
    return this.http.patch(url, data, { headers: this.authHeader });
  }

  public addBusinessModelCanvas(data: CanvasData): Observable<Boolean> {
    return this.http.post<Boolean>(this.baseAddress + 'businessmodelcanvas/', data, { headers: this.authHeader });
  }

  public deleteBusinessModelCanvas(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(this.baseAddress + 'businessmodelcanvas/' + id, { headers: this.authHeader });
  }
}
