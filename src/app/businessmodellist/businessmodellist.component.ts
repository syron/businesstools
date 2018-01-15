import { Component, OnInit } from '@angular/core';
import { BusinesstoolsapiService } from '../businesstoolsapi.service';
import { CanvasData } from '../canvas-data';

@Component({
  selector: 'app-businessmodellist',
  templateUrl: './businessmodellist.component.html',
  styleUrls: ['./businessmodellist.component.css']
})
export class BusinessmodellistComponent implements OnInit {

  canvasList: Array<CanvasData>;

  constructor(public businesstoolsapi: BusinesstoolsapiService) {
    this.businesstoolsapi.getBusinessModelCanvasList().subscribe((data: Array<CanvasData>) => {
      this.canvasList = data;
      console.log(this.canvasList);
    });
  }

  ngOnInit() {
  }

}
