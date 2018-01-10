import { Component } from '@angular/core';
import { BusinesstoolsapiService } from './businesstoolsapi.service';
import { CanvasData } from './canvas-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  canvasData: CanvasData;

  constructor(public businesstoolsapi: BusinesstoolsapiService) {
    this.businesstoolsapi.getData(1).subscribe((data: CanvasData) => {
      this.canvasData = data;
    });
  }
}
