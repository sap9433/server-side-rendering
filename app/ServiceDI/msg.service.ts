export class MsgService {
	get(key) {
		const messages = {
			morning: 'Good morning',
			afternoon: 'Good afternoon',
			evening: 'Good evening'
		};
		return messages[key] || 'Hello';
	}
}