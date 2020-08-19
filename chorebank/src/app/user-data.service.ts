import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  
  user = [
    {
      id: 1,
      name: "Jorge",
      gender: "m",
      chores: [
        {
          title: "Wash Dishes",
          complete: false,
          verified: false
        },
        {
          title: "Walk Dogs",
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: 2,
      name: "Aria",
      gender: "f",
      chores: [
        {
          title: "Pick Up Toys",
          complete: false,
          verified: false
        },
        {
          title: "Brush Teeth",
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: 3,
      name: "Tatyana",
      gender: "f",
      chores: [
        {
          title: "Wash Clothes",
          complete: false,
          verified: false
        },
        {
          title: "Clean Room",
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: 4,
      name: "Cameron",
      gender: "m",
      chores: [
        {
          title: "Feed Dogs",
          complete: false,
          verified: false
        },
        {
          title: "Vacuum Carpet",
          complete: false,
          verified: false
        }
      ],
    }
  ]

  getUser() {
    return this.user;
  }
}
