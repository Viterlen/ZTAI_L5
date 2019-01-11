import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  credentials = {
    name: '',
    email: '',
    password: '',
  };

  logged:boolean;
  logout:boolean;
  constructor(public authService: AuthService,
              private router: Router) {
  }
  ngOnInit(){}

  create() {
    if (!this.credentials) {
      delete this.credentials;
    }
    return this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      console.log("rejestracja przebiegła pomyślnie");
      return result;
    });
  }
}




