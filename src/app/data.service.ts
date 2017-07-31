import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private formValues = new BehaviorSubject<{value: number}[]>([{value: null},{value: null}]);

	currentValues = this.formValues.asObservable();

	changeValues(values) {
		this.formValues.next(values);
	}



  	constructor() { }


}
