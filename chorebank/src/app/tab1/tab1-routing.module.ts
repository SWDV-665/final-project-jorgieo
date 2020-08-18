import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UserChoresPage } from '../user-chores/user-chores.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: './user-chores',
    component: UserChoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
