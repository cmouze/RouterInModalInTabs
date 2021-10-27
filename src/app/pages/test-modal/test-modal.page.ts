import { Component, OnInit, ViewChild } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { Subview1Page } from '../subviews/subview1/subview1.page';
import { Subview2Page } from '../subviews/subview2/subview2.page';
import { Subview3Page } from '../subviews/subview3/subview3.page';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.page.html',
  styleUrls: ['./test-modal.page.scss'],
})
export class TestModalPage implements OnInit {
  @ViewChild('nav') nav: IonNav;
  level = 0;
  nextPage = Subview1Page;
  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  open(subview: string) {
    if (subview === 'subview1') {
      this.nextPage = Subview1Page;
    } else if (subview === 'subview2') {
      this.nextPage = Subview2Page;
    } else if (subview === 'subview3') {
      this.nextPage = Subview3Page;
    }
  }

  goForward(subview: string) {
    if (subview === 'subview1') {
      this.nextPage = Subview1Page;
    } else if (subview === 'subview2') {
      this.nextPage = Subview2Page;
    } else if (subview === 'subview3') {
      this.nextPage = Subview3Page;
    }
    this.nav.push(this.nextPage, { level: this.level + 1 });
  }

  goRoot() {
    this.nav.popToRoot();
  }
}
