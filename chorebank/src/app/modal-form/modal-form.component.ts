import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {

  constructor(private modalController: ModalController, private userData:UserDataService) { }

  ngOnInit() {}

  selectedGender: string = "m";
  userName:string;
  nameIsEmpty:boolean;

  async cancelModal() {
    await this.modalController.dismiss()
  }

  async addUser() {
    if (!this.userName) {
      this.nameIsEmpty = true
      return
    }
    console.log("User added",this.userName, this.selectedGender)
    this.userData.addUser(this.userName, this.selectedGender)
    await this.modalController.dismiss()
  }

  setSelectedGender(event) {
    this.selectedGender = event.detail.value;
  }

}
