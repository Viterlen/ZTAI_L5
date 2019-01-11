import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    login: '',
    password: ''
  };
  logged:boolean;
  logout:boolean;
  constructor(public authService: AuthService,
              public router: Router) {
  }
  ngOnInit(){}

  signIn() {

      return this.authService.authenticate(this.credentials).subscribe((result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.logout = false;
          this.logged = true;
          this.credentials = {
            login: '',
            password: ''
          };
          this.router.navigate(['/home']);
        }
      });
    }
}




