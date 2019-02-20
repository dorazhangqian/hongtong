import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StagingFalsePage } from '../staging-false/staging-false';
/**
 * Generated class for the ChooseStagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-staging',
  templateUrl: 'staging.html',
})
export class StagingPage {
	showtype:boolean=false;
	bankName:string='';
	typeList:any=[
	{id:1,name:'微信',img:'assets/imgs/icon_wechatpaly@2x.png'},
	{id:2,name:'银联',img:'assets/imgs/icon_unionPay@2x.png'},
	{id:3,name:'中国工商银行',img:'assets/imgs/icon_ICBC@2x.png'},
	{id:4,name:'兴业银行',img:'assets/imgs/icon_industrial_bank@2x.png'}
	];
	stagList:any=[
	{name:'2期',price:320.90,price2:39.70},
	{name:'3期',price:320.90,price2:39.70},
	{name:'6期',price:320.90,price2:39.70},
	{name:'9期',price:320.90,price2:39.70},
	{name:'12期',price:320.90,price2:39.70}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseStaging2Page');
  }

  showType(ev:any){
  	ev.stopPropagation();
  	this.showtype=true;
  }
  closeType(ev:any){
  	ev.stopPropagation();
  	this.showtype=false;
  }
  chooseType(item:string){
    this.bankName=item;
  }
  
  toStagingFalse(){
  	this.navCtrl.push(StagingFalsePage);
  }
}
