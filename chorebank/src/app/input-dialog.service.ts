import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(private alertController: AlertController, private userData: UserDataService) { }

  async showDialog(id) {
    const alert = await this.alertController.create({
      cssClass: 'input-dialog',
      header: 'Add A Chore',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (name) => {
            // add a function in the user data service to add chores
            this.userData.addChore(name.title, id)
          }
        }
      ]
    });

    await alert.present();
  };

}
