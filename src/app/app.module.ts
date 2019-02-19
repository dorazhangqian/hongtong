import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PackageDetailPage } from '../pages/package-detail/package-detail';
import { ChooseStagingPage } from '../pages/choose-staging/choose-staging';
import { PackageListPage } from '../pages/package-list/package-list';
import { ChooseStaging2Page } from '../pages/choose-staging2/choose-staging2';
import { StagingFalsePage } from '../pages/staging-false/staging-false';
import { MallPage } from '../pages/mall/mall';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PackageDetailPage,
    ChooseStagingPage,
    PackageListPage,
    ChooseStaging2Page,
    StagingFalsePage,
    MallPage
    
  ],
  imports: [
    BrowserModule,
      IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      mode: 'ios',  //平台样式
      backButtonText: '',//按钮内容
      // backButtonIcon: 'myback',//按钮图标样式
      tabsHideOnSubPages: 'true', //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PackageDetailPage,
    ChooseStagingPage,
    PackageListPage,
    ChooseStaging2Page,
    StagingFalsePage,
    MallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
