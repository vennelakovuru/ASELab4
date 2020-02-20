import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   constructor() {
   }
    name = '';
    emailId = '';
    password = '';
    password1 = '';
    registerSuccess: boolean = false;
    registerAttempted: boolean = false;

    register() {
        this.registerAttempted = true;
        if (this.emailId == '' || this.password == '') {
            this.registerSuccess = false;
        } else {
            localStorage.setItem(this.emailId, this.password);
            this.registerSuccess = true;
        }
    }

  ngOnInit(): void {
  }

}
