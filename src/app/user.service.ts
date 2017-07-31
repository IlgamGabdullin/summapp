import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

	  private isUserLoggedIn;
	  private username = new BehaviorSubject<string>('Here is the username');

    currentUserName = this.username.asObservable();

    changeUserName(email: string) {
      this.username.next(email);
    }

  	constructor() { 
  		this.isUserLoggedIn = false;
  	}

  	setUserLoggedIn() {
  		this.isUserLoggedIn = true;
  	}

  	getUserLoggedIn() {
  		return this.isUserLoggedIn;
  	}

}
