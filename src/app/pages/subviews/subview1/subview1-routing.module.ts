import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subview1Page } from './subview1.page';

const routes: Routes = [
  {
    path: '',
    component: Subview1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subview1PageRoutingModule {}
