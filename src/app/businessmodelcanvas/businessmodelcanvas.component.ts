import { Component, OnInit } from '@angular/core';
import { CanvasData } from '../canvas-data';
import { BusinesstoolsapiService } from '../businesstoolsapi.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ParamMap } from '@angular/router/src/shared';
import { HttpEvent } from '@angular/common/http/src/response';

@Component({
  selector: 'app-businessmodelcanvas',
  templateUrl: './businessmodelcanvas.component.html',
  styleUrls: ['./businessmodelcanvas.component.css']
})
export class BusinessmodelcanvasComponent implements OnInit {

  title = 'app';
  
  canvasData$: Observable<CanvasData>;
  canvasData: CanvasData;
  selectedId: string;

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

  constructor(public businesstoolsapi: BusinesstoolsapiService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.canvasData$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = params.get('id');
      return this.businesstoolsapi.getBusinessModelCanvas(this.selectedId);
    });

    this.canvasData$.subscribe(data => {
      this.canvasData = data;
    });
  }

  saveCanvas() {
    console.log(this.canvasData);
    this.businesstoolsapi.updateBusinesssModelCanvas(this.canvasData).subscribe((data: boolean) => {
      console.log(data);
    });
  }

}
