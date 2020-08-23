import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { PopoverController } from '@ionic/angular';
import { CashoutPopoverComponent } from '../cashout-popover/cashout-popover.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private userData:UserDataService, private popoverController: PopoverController) {}

  loadUsers() {
    return this.userData.getUsers()
  }

  async cashOut(user) {
    const popover = await this.popoverController.create({
      component: CashoutPopoverComponent,
      componentProps: {
        user: user
      }
    })
    await popover.present()
  }

}
