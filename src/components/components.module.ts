import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchResultComponent } from './search-result/search-result';
import { RepositoriesComponent } from './repositories/repositories';
@NgModule({
	declarations: [
    SearchResultComponent,
    RepositoriesComponent
  ],
	imports: [
    IonicModule
  ],
	exports: [
    SearchResultComponent,
    RepositoriesComponent
  ]
})
export class ComponentsModule {}
