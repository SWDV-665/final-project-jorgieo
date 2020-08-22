import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private userData:UserDataService) {}

  loadUsers() {
    return this.userData.getUsers()
  }

  cashOut() {
    console.log("Cha-ching!")
  }

}
