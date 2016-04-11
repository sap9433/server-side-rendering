export class GreetService {

	greet(name) {
		const time = new Date().getHours();
		if (time < 12)return `Good Morning ${name}`;
		else if (time >= 12 && time <= 17) return `Good Afternoon ${name}`;
		else return `Good Evening ${name}`;
	}
}