import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { TestModalPage } from '../pages/test-modal/test-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController,
              public routerOutlet: IonRouterOutlet) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TestModalPage,
      swipeToClose: true,
      showBackdrop: true,
      // cssClass: 'cssResourceModal',
      //presentingElement: this.routerOutlet.nativeEl,
      componentProps: { mode: 'test' }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
}
