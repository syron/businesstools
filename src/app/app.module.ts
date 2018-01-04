import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BmcitemlistComponent } from './bmcitemlist/bmcitemlist.component';


@NgModule({
  declarations: [
    AppComponent,
    BmcitemlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
