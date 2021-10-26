import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subview3PageRoutingModule } from './subview3-routing.module';

import { Subview3Page } from './subview3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subview3PageRoutingModule
  ],
  declarations: [Subview3Page]
})
export class Subview3PageModule {}
