import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { Example1Component } from './example1.component';
import { Example2Component } from './example2.component';
import { Example3Component } from './example3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TitleComponent, Example1Component, Example2Component, Example3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
