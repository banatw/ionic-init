import { ModalPage } from './../modal/modal';
import { SecondPage } from './../second/second';

import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  clickMe() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
    
  }
}
