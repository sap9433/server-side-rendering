import {Component} from '@angular/core';
import {GreetService} from './greet.service.ts';
import { MsgService} from './msg.service.ts';

@Component({
	template: `
    <h2>Service And DI</h2>
    {{message}}
    `,
    providers: [GreetService, MsgService]
})
export class GreetUser {
	message: String;
	constructor(saluter: GreetService) {
		this.message = saluter.greet('Alex');
	}
}