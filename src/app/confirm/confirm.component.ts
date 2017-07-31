import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

	  values;

  	constructor(private data: DataService) { }

  	ngOnInit() {
  		this.data.currentValues.subscribe(values => this.values = values);
  	}

  	sortByUp(e) {
      e.preventDefault();
      this.values.sort(function(a,b) {
        if(+a.value > +b.value) return 1;
        if(+a.value < +b.value) return -1;
      });
    }

    sortByDown(e) {
      e.preventDefault();
      this.values.sort(function(a,b) {
        if(+a.value < +b.value) return 1;
        if(+a.value > +b.value) return -1;
      });
    }

}
