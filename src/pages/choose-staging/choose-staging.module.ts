import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseStagingPage } from './choose-staging';

@NgModule({
  declarations: [
    ChooseStagingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseStagingPage),
  ],
})
export class ChooseStagingPageModule {}
