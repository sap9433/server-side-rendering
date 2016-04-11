import {Component} from 'angular2/core';
import {GreetService} from './greet.service.ts';

@Component({
	template: `
    <h2>Service And DI</h2>
    {{message}}
    `,
    providers: [GreetService]
})
export class GreetUser {
	message: String;
	constructor(saluter: GreetService) {
		this.message = saluter.greet('Alex');
	}
}