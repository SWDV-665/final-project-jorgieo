import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChoresPageRoutingModule } from './user-chores-routing.module';

import { UserChoresPage } from './user-chores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChoresPageRoutingModule
  ],
  declarations: [UserChoresPage]
})
export class UserChoresPageModule {}
