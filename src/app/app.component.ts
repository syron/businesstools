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
    this.businesstoolsapi.getBusinessModelCanvas("5a5b621e47d3c10a187153fb").subscribe((data: CanvasData) => {
      this.canvasData = data;
    });
  }

  saveCanvas() {
    console.log(this.canvasData);
    this.businesstoolsapi.saveBusinesssModelCanvas(this.canvasData).subscribe((data: boolean) => {
      console.log(data);
    });
  }
}
