import {Component} from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {DataService} from './dataService.ts';


@Component({
	template: `
    <h2>About Us</h2>
    <p>Developed by App2Fusion.</p>
    <pre> {{ data }} </pre>`,
	providers: [HTTP_PROVIDERS, DataService]
})
export class HttpClient { 
	constructor(private _dataService: DataService) { }
	errorMessage: string;
	data: any;
	ngOnInit() { this.fetchData(); }
	fetchData() {
		this._dataService.getData()
			.subscribe(
			data => this.data = data,
			error => this.errorMessage = <any>error);
	}
}