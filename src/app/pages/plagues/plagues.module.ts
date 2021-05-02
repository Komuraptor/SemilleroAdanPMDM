import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaguesPageRoutingModule } from './plagues-routing.module';

import { PlaguesPage } from './plagues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaguesPageRoutingModule
  ],
  declarations: [PlaguesPage]
})
export class PlaguesPageModule {}
