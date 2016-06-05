import {Injectable} from '@angular/core';
import {MsgService} from './msg.service.ts';

@Injectable()
export class GreetService {
	msg: MsgService;
	
	constructor(msg: MsgService) { 
		this.msg = msg;
	}
	
	greet(name) {
		const time = new Date().getHours();
		if (time < 12) {
			return `${this.msg.get('morning')} ${name}`;
		}
		else if (time >= 12 && time <= 17){
			return `${this.msg.get('afternoon')} ${name}`;
		} 
		else {
			return `${this.msg.get('evening')} ${name}`;
		}
	}
}