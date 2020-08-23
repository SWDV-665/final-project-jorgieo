import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-cashout-popover',
  templateUrl: './cashout-popover.component.html',
  styleUrls: ['./cashout-popover.component.scss'],
})
export class CashoutPopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController, private navParams: NavParams, private userData:UserDataService) { }

  ngOnInit() {}

  selectedUser = this.navParams.get('user');
  userBalance = this.selectedUser.balance

  async pay(cash) {
    this.userData.withdrawFromBank(cash, this.selectedUser.id);
    await this.popoverController.dismiss()
  }

}
