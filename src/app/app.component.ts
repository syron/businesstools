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
    this.canvasData.channels = ['a', 'b', 'c'];
    this.canvasData.costStructure = ['a'];
    this.canvasData.customerRelationships = ['a', 'b'];
    this.canvasData.customerSegments = ['a', 'b', 'c', 'd'];
    this.canvasData.keyActivities = ['a', 'b', 'c'];
    this.canvasData.keyPartners = ['a', 'b', 'c', 'd', 'e', 'f'];
    this.canvasData.keyResources = ['a', 'b', 'c', 'd'];
    this.canvasData.revenueStreams = ['a', 'b', 'c'];
    this.canvasData.valuePropositions = ['a', 'b', 'c', 'd', 'e', 'f'];
  }
}
