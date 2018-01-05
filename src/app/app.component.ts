import { Component } from '@angular/core';
import { BusinesstoolsapiService } from './businesstoolsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  canvasData: any = {
    keyPartners: [],
    keyActivities: [],
    keyResources: [],
    valuePropositions: [],
    customerRelationships: [],
    channels: [],
    customerSegments: [],
    costStructure: [],
    revenueStreams: []
  }

  constructor(public businesstoolsapi: BusinesstoolsapiService) {
    this.businesstoolsapi.getData(1).subscribe(data => {
      this.canvasData = data;
    })
  }
}
