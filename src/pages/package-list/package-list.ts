import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../package-detail/package-detail';
/**
 * Generated class for the PackageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-package-list',
  templateUrl: 'package-list.html',
})
export class PackageListPage {
    list:any=[
	{id:3,img:'../assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:4,img:'../assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:5,img:'../assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
	];
	shadowShare:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageListPage');
  }
  showShare(item:any){
  	console.log(item);
  	event.stopPropagation();
  	this.shadowShare=true;
  }
  closeShare(){
  	this.shadowShare=false;
  }
  share(item:any){
  	event.stopPropagation();
  	alert(item);
  }
  toPackageDetail(){
  	this.navCtrl.push(PackageDetailPage);
  }

}
