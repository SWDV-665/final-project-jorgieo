import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { InputDialogService } from '../input-dialog.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-chores',
  templateUrl: './user-chores.page.html',
  styleUrls: ['./user-chores.page.scss'],
})
export class UserChoresPage {


  constructor(private route:ActivatedRoute, private userData:UserDataService, private inputDialog: InputDialogService, private toastController: ToastController) { }


  slugID = this.route.snapshot.paramMap.get("id")
    
  selectedUser = this.userData.getUserByID(this.slugID)

  getChores(){
    return this.userData.getUserChores(this.selectedUser)
  }
  
  addChore(){
    this.inputDialog.showDialog(this.slugID)
  }

  markComplete(chore){
    this.userData.setChoreComplete(chore, this.slugID);
    let choreStatus = "Complete"
    this.showToast(choreStatus);
  }

  markVerified(chore){
    this.userData.setChoreVerified(chore, this.slugID);
    let choreStatus = "Verified"
    this.showToast(choreStatus);
  }

  removeChore(chore) {
    this.userData.removeChore(chore, this.slugID)
  }

  async showToast (status) {
    const toast = await this.toastController.create({
      message: "Chore " + status,
      duration: 1500
    })
    await toast.present();
  }

}
