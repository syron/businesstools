import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BmcitemlistComponent } from './bmcitemlist/bmcitemlist.component';
import { BusinesstoolsapiService } from './businesstoolsapi.service';

@NgModule({
  declarations: [
    AppComponent,
    BmcitemlistComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [BusinesstoolsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
