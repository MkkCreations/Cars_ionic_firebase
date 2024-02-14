import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarNewPage } from './car-new.page';

const routes: Routes = [
  {
    path: '',
    component: CarNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarNewPageRoutingModule {}
