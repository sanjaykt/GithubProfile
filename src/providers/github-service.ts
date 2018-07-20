import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from '../../node_modules/rxjs/Observable';
import { USER_LIST } from '../mocks/user.mocks';
import { User } from '../models/user.interface';


@Injectable()
export class GithubServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

}
