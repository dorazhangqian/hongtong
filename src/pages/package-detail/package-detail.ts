import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseStagingPage } from '../choose-staging/choose-staging';

/**
 * Generated class for the PackageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-package-detail',
  templateUrl: 'package-detail.html',
})
export class PackageDetailPage {
  goods:any={img:'../assets/imgs/thumbnail.png',price:300,num:2000,name:"套餐标题套餐套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题标题套餐标题套餐标题套餐标题套餐标题...",
  detail:"1. 套餐详情套餐详情套餐详情套餐详情套餐详套餐详情套餐。2. 详情套餐详情套餐详情套餐详情；3. 套餐详情套餐详情套餐详情套餐详情套餐详情套餐详情套餐详情套餐详情套餐详情套餐详套餐详情套餐详情套餐详情套餐详情套餐详情。4. 套餐详情套餐详情套餐详情套餐详情套餐详情。"}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageDetailPage');
  }
  toStaging(){
  	this.navCtrl.push(ChooseStagingPage);
  }

}
