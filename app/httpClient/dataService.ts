import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class DataService {
  constructor(private http: Http) { }
  private _heroesUrl = 'http://polls.apiblueprint.org/questions';  // URL to web api
  getData(): Observable<any[]> {
    return this.http.get(this._heroesUrl)
      .map(this.extractData, this.handleError);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}