import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageListPage } from './package-list';

@NgModule({
  declarations: [
    PackageListPage,
  ],
  imports: [
    IonicPageModule.forChild(PackageListPage),
  ],
})
export class PackageListPageModule {}
