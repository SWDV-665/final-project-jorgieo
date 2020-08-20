import { Component } from '@angular/core';
import { InputDialogService } from '../input-dialog.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private inputDialog:InputDialogService, private userData:UserDataService) {}

  loadUsers() {
    return this.userData.getUsers()
  }
  
}
