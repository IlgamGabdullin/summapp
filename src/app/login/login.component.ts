import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  	
  	constructor(private router: Router, private user: UserService) { }
	
	email: string = '';
	password: string = '';
	username:string;
	loggedIn: boolean = this.user.getUserLoggedIn();
  isNotCorrect = false;

  	ngOnInit() {
  		this.user.currentUserName.subscribe(email => this.username = this.email);
  	}

  	login() {

  		// validating
  		if(this.email == "admin@admin.ru" && this.password == "admin") {

  			this.user.setUserLoggedIn();

  			this.router.navigateByUrl('profile');

  			this.user.changeUserName(this.email)
  		} else {

        this.isNotCorrect = true;

      }
  	}

    toggleValid() {
      this.isNotCorrect = false;
    }

}
