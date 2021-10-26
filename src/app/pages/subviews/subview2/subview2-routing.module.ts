import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subview2Page } from './subview2.page';

const routes: Routes = [
  {
    path: '',
    component: Subview2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subview2PageRoutingModule {}
