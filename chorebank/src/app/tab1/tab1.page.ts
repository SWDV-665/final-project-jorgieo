import { Component } from '@angular/core';
import {UserDataService} from '../../app/user-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public userData: UserDataService, public router: Router) {}

  loadUsers(){
    return this.userData.getUser();
  };

  navigate() {
    this.router.navigate(['user-chores'])
  }

}
