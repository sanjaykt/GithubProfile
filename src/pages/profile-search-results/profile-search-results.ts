import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.interface";
import { GithubServiceProvider } from './../../providers/github-service';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gitHubService: GithubServiceProvider) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    // console.log("the user name is: "+ this.username);
    if(this.username){
      this.getUserInformation();
    }
  }

  getUserInformation():void {
    this.gitHubService.mockGetUserInformation(this.username)
        .subscribe((data):User => this.user = data)
  }


}
