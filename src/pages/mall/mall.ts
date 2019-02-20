import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoodsDetailPage } from '../goods-detail/goods-detail';
/**
 * Generated class for the MallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {
    goodsList:any=[
	{id:1,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐',num:90,price:300},
	{id:2,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:3,img:'assets/imgs/thumbnail2.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:4,img:'assets/imgs/thumbnail3.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
	{id:5,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
	];
	type:string='type0';
	priceSort:boolean=true;
	numSort:boolean=true;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
  }
  segmentChanged(e:any){
  	console.log(e.value);
  	if(e.value=='type0'){
  		this.goodsList=[
		{id:1,img:'assets/imgs/thumbnail.png',name:'套餐标题套餐标题套餐',num:90,price:300},
		{id:2,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
		{id:3,img:'assets/imgs/thumbnail2.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
		{id:4,img:'assets/imgs/thumbnail3.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
		{id:5,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
		]
  	}else if(e.value=='type1'){
  		this.goodsList=[
  		{id:3,img:'assets/imgs/thumbnail2.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
		{id:4,img:'assets/imgs/thumbnail3.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300},
		{id:5,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
  		]
  	}else{
  		this.goodsList=[
  		
		{id:5,img:'assets/imgs/thumbnail4.png',name:'套餐标题套餐标题套餐标题套餐标题套餐标题套餐标题',num:90,price:300}
  		]
  	}
  }
  
  sort(item:string){
  	if(item=='num'){
  		this.numSort=!this.numSort;
  	}else{
  		this.priceSort=!this.priceSort;
  	}
  }
  
  toGoodsDetail(){
  	this.navCtrl.push(GoodsDetailPage);
  }

}
