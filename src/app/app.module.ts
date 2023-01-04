import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PiedDePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
