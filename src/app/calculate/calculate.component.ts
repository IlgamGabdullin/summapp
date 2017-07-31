import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

	isLoading = true;
	nextStep:number = 4;


	@Output() stepToMove = new EventEmitter<number>();

  	constructor() { }

  	ngOnInit() {
  		var that = this;
  		setTimeout(function() {
  			that.isLoading = false;
  			that.sendStep();
  		}, 5000);
  	}

  	sendStep() {
  		this.stepToMove.emit(this.nextStep);
  	}

}
