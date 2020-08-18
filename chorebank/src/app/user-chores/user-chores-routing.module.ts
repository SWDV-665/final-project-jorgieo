import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChoresPage } from './user-chores.page';

const routes: Routes = [
  {
    path: '',
    component: UserChoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChoresPageRoutingModule {}
