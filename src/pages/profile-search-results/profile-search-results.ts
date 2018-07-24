import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.interface";
import { GithubServiceProvider } from './../../providers/github-service';
import {RepositoryInterface} from "../../models/repository.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;
  repositories: RepositoryInterface[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gitHubService: GithubServiceProvider,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    // console.log("the user name is: "+ this.username);
    if(this.username){
      this.getUserInformation();
    }
  }

  getUserInformation():void {
    // without calling the service... directly http request and subscribing it
    // this.http.get(`https://api.github.com/users/${this.username}`)
    //   .do((data: User) => console.log(data))
    //   .catch((err: Response) => Observable.throw(err.json() || 'server error'))
    //   .subscribe((data: User) => this.user = data);


    this.gitHubService.getUserInformation(this.username)
      .subscribe((data: User) => this.user = data);

    this.gitHubService.getRepositoryInformation(this.username)
      .subscribe((data: RepositoryInterface[]) => this.repositories = data);

    // this.gitHubService.mockGetUserInformation(this.username).subscribe((data):User => this.user = data);
    // this.gitHubService.mockGetRepositoryInformation(this.username).subscribe((data): RepositoryInterface[] => this.repositories = data)
  }
}
