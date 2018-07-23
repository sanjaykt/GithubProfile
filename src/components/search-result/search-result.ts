import {Component, Input} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultComponent {

  @Input() user: User;

  constructor() {}

}
