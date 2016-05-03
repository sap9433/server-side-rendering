import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  private _url = 'https://api.github.com/users/Ng2book/repos';

  getData(): Rx.Observable<any[]> {
    return this.http.get(this._url)
      .map(
        res => res.json(), 
        err => Rx.Observable.throw(err.message)
      );
  }
}