import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { USER_LIST } from '../mocks/user.mocks';
import { User } from '../models/user.interface';
import {RepositoryInterface} from "../models/repository.interface";
import {REPOSITORY_LIST} from "../mocks/repository.mocks";
import {HttpClient} from "@angular/common/http";



@Injectable()
export class GithubServiceProvider {
  private baseURL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${username}`)
      .do((data: Response) => console.log(data))
      .catch((err: Response) => Observable.throw(err.json() || 'server error'))
  }

  getRepositoryInformation(username: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${username}/repos`)
      .do((data: Response) => console.log(data))
      .catch((err: Response) => Observable.throw(err.json()) || 'server error')
  }

  mockGetRepositoryInformation(username: string): Observable<RepositoryInterface[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

}
