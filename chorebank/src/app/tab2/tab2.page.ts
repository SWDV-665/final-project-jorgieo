import { Component } from '@angular/core';
import { InputDialogService } from '../input-dialog.service';
import { UserDataService } from '../user-data.service';
import { ModalController } from '@ionic/angular';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private inputDialog:InputDialogService, private userData:UserDataService, private modalController:ModalController) {}

  loadUsers() {
    return this.userData.getUsers()
  }

  async addUserDialog() {
    const modal = await this.modalController.create({
      component: ModalFormComponent
    })
    await modal.present()
  }

}
