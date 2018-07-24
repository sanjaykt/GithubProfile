import {Component, Input} from '@angular/core';
import {RepositoryInterface} from "../../models/repository.interface";

@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {
  @Input() repository: RepositoryInterface;

  constructor() {}

}
