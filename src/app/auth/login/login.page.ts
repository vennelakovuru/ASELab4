import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router) {
    }

    emailId = '';
    password = '';
    storedPassword = '';
    loginSuccess: boolean = false;
    loginAttempted: boolean = false;

    login() {
      this.loginAttempted = true;
      this.storedPassword = localStorage.getItem(this.emailId);
      if (this.password == this.storedPassword) {
        this.loginSuccess = true;
        this.router.navigateByUrl("/home");
      }
    }
        ngOnInit()
        {
        }

    }
