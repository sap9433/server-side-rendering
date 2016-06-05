import {Component} from '@angular/core'; 
import { Observable } from 'rxjs/Rx';

@Component({
	template: `
    <h2>Promise Vs Observable</h2>
    <p> Promise resolved: {{promiseOutput}}</p>
    <p> Observable next: {{observableOutput}} </p>`
})
export class ObservableExample {
	promiseOutput: String;
	observableOutput: String;

	ngOnInit() { 
		this.implementPromise(); 
		this.implementObservable(); 
	}

	implementPromise() {
		let promise = new Promise<String>((resolve) => {
			setTimeout(() => resolve('Promise works.') , 1000);
		});
		promise.then((res: String) => this.promiseOutput = res);
	}

	implementObservable() {
		let source = Observable.create((subscriber) => {
			setTimeout(() => subscriber.next('Observable works.'), 1000);
		});
		source.subscribe((res: String) => this.observableOutput = res);
	}
}