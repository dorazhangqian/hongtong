import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OrderConfirmPage} from '../order-confirm/order-confirm'
/**
 * Generated class for the GoodsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-goods-detail',
	templateUrl: 'goods-detail.html',
})
export class GoodsDetailPage {
	shadowShare: boolean = false;
	num: number = 1;
	disableMinus: boolean = true
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GoodsDetailPage');
	}
	showShare() {
		event.stopPropagation();
		this.shadowShare = true;
	}
	closeShare() {
		this.shadowShare = false;
	}

	numF(item: string) {
		if(this.num <= 1 && item != "add") {
			this.disableMinus = true;
		} else {
			this.disableMinus = false;
			if(item == "add") {
				this.num += 1;
			} else {
				this.num -= 1;
				if(this.num==1){
					this.disableMinus = true;
				}
			}
		}

	}
	
	toOrderConfirm(){
		this.shadowShare = false;
		this.navCtrl.push(OrderConfirmPage);
	}

}