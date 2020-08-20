import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../app/user-data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public userData: UserDataService, public router: Router) {}
  
  // Placeholder for user statistics
  userStats = [];

  // Pull user objects once
  ngOnInit(){

    // Pull user objects and extract statistics, then return a stats object for each user
    // and append to userStats array.
    this.userData.getUsers().forEach(user => {
      this.userStats.push(this.userData.getUserStats(user))
    });
  }
 
  navigate(id) {
    this.router.navigate(['user-chores', id])
  }

}
