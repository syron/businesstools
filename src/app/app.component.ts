import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  canvasData = {
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

  constructor() {
    this.mockData();
  }

  mockData() {
    this.canvasData.channels = ['a', 'b'];
    this.canvasData.costStructure = ['a', 'b'];
    this.canvasData.customerRelationships = ['a', 'b'];
    this.canvasData.customerSegments = ['a', 'b'];
    this.canvasData.keyActivities = ['a', 'b'];
    this.canvasData.keyPartners = ['a', 'b'];
    this.canvasData.keyResources = ['a', 'b'];
    this.canvasData.revenueStreams = ['a', 'b'];
    this.canvasData.valuePropositions = ['a', 'b'];
  }
}
