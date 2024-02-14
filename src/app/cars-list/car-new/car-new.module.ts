import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarNewPageRoutingModule } from './car-new-routing.module';

import { CarNewPage } from './car-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarNewPageRoutingModule
  ],
  declarations: [CarNewPage]
})
export class CarNewPageModule {}
