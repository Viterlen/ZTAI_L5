import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    gender: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    marital: new FormControl(''),
    description: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit() {

  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
}
