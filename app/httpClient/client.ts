import {Component} from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {DataService} from './dataService.ts';

@Component({
	template: `
    <h2>List of Github Repositories by Ng2</h2>
    <p *ngFor="let datum of data; let i = index"> {{i+1}}. - {{datum.full_name}}</p>
    <p *ngIf="errorMessage"> Error : {{errorMessage}}</p>`,
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
				err => this.errorMessage = err
			);
	}
}