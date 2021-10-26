import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subview1PageRoutingModule } from './subview1-routing.module';

import { Subview1Page } from './subview1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subview1PageRoutingModule
  ],
  declarations: [Subview1Page]
})
export class Subview1PageModule {}
