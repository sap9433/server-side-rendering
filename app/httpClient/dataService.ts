import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: Http) { }
  
  private _url = 'https://api.github.com/users/Ng2book/repos';

  getData(): Observable<any[]> {
    return this.http.get(this._url)
      .map(
        res => res.json(), 
        err => Observable.throw(err.message)
      );
  }
}