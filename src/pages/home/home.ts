import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PackageDetailPage } from '../package-detail/package-detail';
import { PackageListPage } from '../package-list/package-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Slides) slides:Slides;
	slideItem:any=[
  {'img':'assets/imgs/banner.png'},
  {'img':'assets/imgs/banner.png'},
  {'img':'assets/imgs/banner.png'},
  {'img':'assets/imgs/banner.png'},
	{'img':'assets/imgs/banner.png'}];
	list:any=[
	{id:1,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐',num:90,price:300},
	{id:2,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:3,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:4,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:5,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
	];
	
	shadowShare:boolean=false

  constructor(public navCtrl: NavController) {

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
  moreGoods(){
  	this.navCtrl.push(PackageListPage);
  }

}
