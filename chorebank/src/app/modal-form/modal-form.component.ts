import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {

  constructor(private modalController: ModalController, private userData:UserDataService, private navParams: NavParams) { }

  nameIsEmpty:boolean;

   ngOnInit() {}

   selectedUser = this.navParams.get('user');
   modalMode = this.navParams.get('mode');

   userName = this.selectedUser? this.selectedUser.name : null
   selectedGender = this.selectedUser? this.selectedUser.gender : 'f'

   radioChange(event){
     this.selectedGender = event.detail.value
   }

  async cancelModal() {
    await this.modalController.dismiss()
  }

  async addUser() {
    if (!this.userName) {
      this.nameIsEmpty = true
      return
    }
    this.userData.addUser(this.userName, this.selectedGender)
    await this.modalController.dismiss()
  }

  
  async editUser() {
    if (!this.userName) {
      this.nameIsEmpty = true
      return
    }
    this.userData.editUser(this.userName, this.selectedGender, this.selectedUser.id)
    await this.modalController.dismiss()
  }

}
