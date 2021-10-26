import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subview3Page } from './subview3.page';

const routes: Routes = [
  {
    path: '',
    component: Subview3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subview3PageRoutingModule {}
