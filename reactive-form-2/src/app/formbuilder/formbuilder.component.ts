import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
submitted:boolean;
  constructor(private fb: FormBuilder) { }

  formName = this.fb.group({
    inputName: ['default value', Validators.required]
  });

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    if(!this.formName.valid) {  // !this.formName.valid === false
      alert('form invalid da frnddddddd')
    }
    console.log('value',this.formName.value)
  }

}