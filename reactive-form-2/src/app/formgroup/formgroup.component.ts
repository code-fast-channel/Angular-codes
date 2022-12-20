import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {

  ngOnInit() {
  }
  submitted:boolean;

  name = 'Angular';
  frmGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('', []),
    address: new FormControl('', []),
    age: new FormControl('', []),
    income: new FormControl('', [])
  })

  constructor(){
    this.frmGroup.valueChanges.subscribe(val=>{
      console.log(val.firstName)
    })
  }

  submit() {
    this['submitted']=true;
    if(this.frmGroup.invalid) {
      alert('fill all the fields freind!!!!!!!!!!!!!!!!!!!!');
      return
    }
    console.log('value',this.frmGroup.value)
  }

}