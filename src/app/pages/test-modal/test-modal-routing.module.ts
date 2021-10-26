import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subview1Page } from '../subviews/subview1/subview1.page';
import { Subview2Page } from '../subviews/subview2/subview2.page';
import { Subview3Page } from '../subviews/subview3/subview3.page';

import { TestModalPage } from './test-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TestModalPage,
    children: [
      {
        path:'subview1',
        component:Subview1Page,
        outlet:'subviews'
      },
      {
        path:'subview2',
        component:Subview2Page,
        outlet:'subviews'
      },
      {
        path:'subview3',
        component:Subview3Page,
        outlet:'subviews'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestModalPageRoutingModule {}
