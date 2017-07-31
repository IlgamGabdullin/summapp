import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';


import { DataService } from '../data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
  	
  ]
})
export class StartComponent implements OnInit {

	  values = [{value: null},{value: null}];
    nextStep: number = 2;

    @Output() stepToMove = new EventEmitter<number>();

  	constructor(private data: DataService) { }

  	ngOnInit() {
  		this.data.currentValues.subscribe(values => this.values = values);
  	}

  	addValue(e) {
  		e.preventDefault();
  		this.values.push({value: null});
  	}

    sendStep() {
      this.stepToMove.emit(this.nextStep);
    }
}
