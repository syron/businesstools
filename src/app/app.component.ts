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
  categories: any = {
    keyPartners: {
      "Name" : "Key Partners",
	    "Description" : "Key Partners are the relationships that you have with other business, governmental, or non-consumer entities that help your business model work. These can be the relationships that your company has with your suppliers, your manufacturers, business partners, etc. These partnerships that you will undoubtedly create will be forces that help your business succeed in areas that would be inefficient for you to do yourself.",
	    "SingularName" : "Key Partner"
    },
    channels: {
      "Name" : "Channels",
      "Description" : "",
      "SingularName" : "Channel"
    },
    costStructures: {
      "Name" : "Cost Structures",
      "Description" : "",
      "SingularName" : "Cost Structure"
    },
    customerRelationships: {
      "Name" : "Customer Relationships",
      "Description" : "",
      "SingularName" : "Customer Relationship"
    },
    customerSegments: {
      "Name" : "Customer Segments",
      "Description" : "",
      "SingularName" : "Customer Segment"
    },
    keyActivities: {
      "Name" : "Key Activities",
      "Description" : "",
      "SingularName" : "Key Activity"
    },
    keyResources: {
      "Name" : "Key Resources",
      "Description" : "",
      "SingularName" : "Key Resources"
    },
    revenueStreams: {
      "Name" : "Revenue Streams",
      "Description" : "",
      "SingularName" : "Revenue Stream"
    },
    valuePropositions: {
      "Name" : "Value Propositions",
      "Description" : "",
      "SingularName" : "Value Proposition"
    }
  };

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
