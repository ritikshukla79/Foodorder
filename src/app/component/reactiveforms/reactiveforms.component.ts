import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerrorsValidators } from '../customvalidator';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  constructor() { }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, CustomerrorsValidators.nospace]),
    password: new FormControl('', [Validators.required, CustomerrorsValidators.valid]),
    phone: new FormControl('', [Validators.required, CustomerrorsValidators.check]),
    topic: new FormArray([])
  })
  addtopics(data: HTMLInputElement) {
    (this.form.get('topic') as FormArray).push(new FormControl(data.value));
    console.log(data.value)
    data.value = "";
  }
  alert2(){
    alert('Yay!! Your Details is Successfully Added!🥳')
  }


  ngOnInit(): void {
  }
  get topics() {
    return (this.form.get('topic') as FormArray)
  }

  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
  get phone() {
    return this.form.get('phone')
  }

}
