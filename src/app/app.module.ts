import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BmcitemlistComponent } from './bmcitemlist/bmcitemlist.component';
import { BusinesstoolsapiService } from './businesstoolsapi.service';
import { BusinessmodelcanvasComponent } from './businessmodelcanvas/businessmodelcanvas.component';
import { BusinessmodellistComponent } from './businessmodellist/businessmodellist.component';

const appRoutes: Routes = [
  { path: 'businessmodelcanvas', component: BusinessmodellistComponent },
  { path: 'businessmodelcanvas/:id',      component: BusinessmodelcanvasComponent },
  { path: '',
    redirectTo: '/businessmodelcanvas',
    pathMatch: 'full'
  }
  //,
  //{ path: '**', component: PageNotFoundComponent }
];

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
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [BusinesstoolsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
