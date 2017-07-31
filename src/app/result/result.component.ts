import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	result: number = 0;
	values;

  	constructor(private data: DataService) { }

  	ngOnInit() {
  		this.data.currentValues.subscribe(values => this.values = values);

  		this.values.forEach(item => {
  			if (Number.isInteger(+item.value)) {
  				this.result += +item.value;
  			}
  		});
  	}

}
