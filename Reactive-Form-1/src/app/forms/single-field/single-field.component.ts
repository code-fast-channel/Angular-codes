import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.css']
})
export class SingleFieldComponent implements OnInit {
  name = new FormControl('',[Validators.required]);
  submitted:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.submitted = true;
    if(this.name.invalid){
      return
    }
    console.log(this.name.value)
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}