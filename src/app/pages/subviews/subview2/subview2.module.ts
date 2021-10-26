import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subview2PageRoutingModule } from './subview2-routing.module';

import { Subview2Page } from './subview2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subview2PageRoutingModule
  ],
  declarations: [Subview2Page]
})
export class Subview2PageModule {}
