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
    this.canvasData.channels = [ {title: 'a'}, {title: 'b' }, {title: 'c'}];
    this.canvasData.costStructure = [{title: 'a'}];
    this.canvasData.customerRelationships = [{title: 'a'}, {title: 'b' }];
    this.canvasData.customerSegments = [{title: 'a'}, {title: 'b' }, {title: 'c'}, {title: 'd'}];
    this.canvasData.keyActivities = [{title: 'a'}, {title: 'b' }, {title: 'c'}];
    this.canvasData.keyPartners = [{title: 'a'}, {title: 'b' }, {title: 'c'}, {title: 'd'}, {title: 'e'}, {title: 'f'}];
    this.canvasData.keyResources = [{title: 'a'}, {title: 'b' }, {title: 'c'}, {title: 'd'}];
    this.canvasData.revenueStreams = [{title: 'a'}, {title: 'b' }, {title: 'c'}];
    this.canvasData.valuePropositions = [{title: 'a'}, {title: 'b' }, {title: 'c'}, {title: 'd'}, {title: 'e'}, {title: 'f'}];
  }
}
