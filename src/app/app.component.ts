import { Component } from '@angular/core';
import { BusinesstoolsapiService } from './businesstoolsapi.service';
import { CanvasData } from './canvas-data';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private location: Location,public businesstoolsapi: BusinesstoolsapiService, public auth: AuthService) {
    
  }
}
