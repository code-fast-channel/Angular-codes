import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.css']
})
export class SingleFieldComponent implements OnInit {

  submitted:boolean;
  name = new FormControl('',[Validators.required,Validators.minLength(6)]);
  constructor() { }

  ngOnInit() {
  }


submit() {
  this.submitted = true;
  if(this.name.invalid) {
    alert('please fill the form');
    return;
  }
  console.log('value',this.name,this.name.value)
}


}