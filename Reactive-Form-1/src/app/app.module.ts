import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SingleFieldComponent } from './forms/single-field/single-field.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,SingleFieldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
