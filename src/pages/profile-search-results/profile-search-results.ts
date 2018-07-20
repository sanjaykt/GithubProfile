import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from './../../providers/github-service';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gitHubService: GithubServiceProvider) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username')
    console.log("the user name is: "+ this.username);
  }

  // getUserInformation():void {
  //   this.gitHubService.mockGetUserInformation(this.username)
  //       .subscribe(data => console.log(data))
  // }


}
