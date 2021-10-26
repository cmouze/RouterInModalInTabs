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

  constructor(public modalCtrl: ModalController) {

  }

  ngOnInit() {
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

}
