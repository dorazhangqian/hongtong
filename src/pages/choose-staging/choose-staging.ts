import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StagingPage } from '../staging/staging';
/**
 * Generated class for the ChooseStagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-choose-staging',
  templateUrl: 'choose-staging.html',
})
export class ChooseStagingPage {
	showtype:boolean=false;
	doorName:string='点击选择门店';
	typeList:any=[
	{id:1,name:'高新区门店'},
	{id:2,name:'华府大道门店'},
	{id:3,name:'四河门店'},
	{id:4,name:'塔子山公园门店'}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseStagingPage');
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
    this.doorName=item;
  }
   toStaging2(){
  	this.navCtrl.push(StagingPage);
  }

}
