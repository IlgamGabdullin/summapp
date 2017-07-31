import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { UserService } from '../user.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('stepState', [
        state('void', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })),
        state(':leave', style({
          backgroundColor: '#eee',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('600ms ease-in')),
        transition('active => inactive', animate('600ms ease-out'))
      ])
  ]
})
export class ProfileComponent implements OnInit {

	username: string;
	step: number = 1;
  titles: string[] = ['Enter data', 'Confirm data', 'Calculating', 'Result'];
  backButton = 'back';

 	constructor(private user: UserService, private data: DataService, private titleService: Title) { }

  	ngOnInit() {
  		this.user.currentUserName.subscribe(email => this.username = email);
      this.titleService.setTitle( this.titles[this.step-1] );
  	}

  	next(e) {
      e.preventDefault();
      if (this.step < 4 ) {
        this.step += 1;
      }
      this.titleService.setTitle( this.titles[this.step-1] ); 
  	}

  	back(e) {
      this.data.changeValues([{value: null},{value: null}]);
      e.preventDefault();
      if (this.step > 1 && this.step != 4) {
        this.step -= 1;
      } else if(this.step == 4) {
        this.step = 1;
        this.backButton = 'back';
      }
      this.titleService.setTitle( this.titles[this.step-1] );
  	}

    moveTo(step) {
      this.step = step;
      this.titleService.setTitle( this.titles[this.step-1] );
    }


    getChangedUsername() {
      var username = this.username.charAt(0).toUpperCase() + this.username.slice(1), // first letter is capitalized
          sliceStart = username.indexOf('@') + 2,
          sliceEnd = username.indexOf('.', sliceStart),
          usernameArr = username.split('');

      for (let i = sliceStart; i < sliceEnd; i++) {
        usernameArr[i] = '*';
      }

      username = usernameArr.join('');

      return username;


    }
}
