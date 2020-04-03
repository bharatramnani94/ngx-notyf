import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxNotyfModule } from 'ngx-notyf';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNotyfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
