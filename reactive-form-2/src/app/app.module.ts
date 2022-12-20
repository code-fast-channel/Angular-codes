import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SingleFieldComponent } from './single-field/single-field.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,SingleFieldComponent ,FormgroupComponent,FormbuilderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
