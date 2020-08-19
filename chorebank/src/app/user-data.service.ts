import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  
  users = [
    {
      id: 1,
      name: "Jorge",
      gender: "m",
      chores: [
        {
          title: "Wash Dishes",
          complete: true,
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
          complete: true,
          verified: true
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
          complete: true,
          verified: true
        },
        {
          title: "Clean Bathroom",
          complete: true,
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
        },
        {
          title: "Straighten Family Room",
          complete: true,
          verified: false
        },
        {
          title: "Put Shoes Away",
          complete: true,
          verified: false
        }
      ],
    }
  ]

  getUsers() {
    return this.users;
  }

  getUserStats(user){
    var numChores = user.chores.length;
    var choreList = [];
    var numComplete = 0;
    user.chores.forEach(chore => {
      choreList.push(chore.title)
      if (chore.complete){
        numComplete++
      };
    });

    var percentComplete = ((numComplete / numChores) * 100.0).toFixed(0).toString() + "%";

    // console.log("user: " + user.name)
    // console.log("chores: " + choreList)
    // console.log("num chores: " + numChores)
    // console.log("num complete: " + numComplete)

    return {name:user.name, gender:user.gender, choreList:choreList, percentComplete:percentComplete}
  }
}