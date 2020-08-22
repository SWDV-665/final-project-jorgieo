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
        },
        {
          name: 'value',
          type: 'number',
          placeholder: 'Value'
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

  // async showUserDialog() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'input-dialog',
  //     header: 'Add A User',
  //     inputs: [
  //       {
  //         name: 'title',
  //         type: 'text',
  //         placeholder: 'Name'
  //       },
  //       {
  //         name: 'gender',
  //         type: 'text',
  //         placeholder: 'Gender',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Add',
  //         handler: (name) => {
  //           // add a function in the user data service to add chores
  //           this.userData.addUser(name.title, name.gender)
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // };

}
