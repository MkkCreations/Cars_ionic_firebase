import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsListPage } from './cars-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./car-new/car-new.module').then( m => m.CarNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsListPageRoutingModule {}
