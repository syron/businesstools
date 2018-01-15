import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BmcitemlistComponent } from './bmcitemlist/bmcitemlist.component';
import { BusinesstoolsapiService } from './businesstoolsapi.service';
import { BusinessmodelcanvasComponent } from './businessmodelcanvas/businessmodelcanvas.component';
import { BusinessmodellistComponent } from './businessmodellist/businessmodellist.component';

@NgModule({
  declarations: [
    AppComponent,
    BmcitemlistComponent,
    BusinessmodelcanvasComponent,
    BusinessmodellistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [BusinesstoolsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
