import { Component, OnInit, ViewChild } from '@angular/core';
import { IonNav, ModalController, NavController } from '@ionic/angular';
import { Subview1Page } from '../subviews/subview1/subview1.page';
import { Subview2Page } from '../subviews/subview2/subview2.page';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.page.html',
  styleUrls: ['./test-modal.page.scss'],
})
export class TestModalPage implements OnInit {
  @ViewChild('mySubNav', {static: true}) myNav: IonNav;
  private rootPage;
  private rootParams; 

  constructor(public modalCtrl: ModalController,
              private navCtrl: NavController) {
    this.rootPage = Subview1Page;
    this.rootParams = {
     // any parameters to pass to the component
    };
  }

  ngOnInit() {
    this.myNav.setRoot(this.rootPage, this.rootParams);
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  private pushToNav() {
    this.myNav.push(Subview2Page, {ninjaName: 'Alpha'});
   }

  private popFromNav() {
    this.myNav.pop();
  }


}
