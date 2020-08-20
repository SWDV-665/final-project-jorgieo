import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  
  users = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
        },
        {
          title: "Clean Bathroom",
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: "4",
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
          complete: false,
          verified: false
        },
        {
          title: "Put Shoes Away",
          complete: false,
          verified: false
        }
      ],
    }
  ]

  getUsers() {
    return this.users;
  }

  getUserByID(id) {
    return this.users.find(user => user.id === id)
  }

  getPercentComplete(user) {
    let numChores = user.chores.length;
    let numComplete = 0;
    user.chores.forEach(chore => {
      if (chore.complete){
        numComplete++
      };
    });
    return ((numComplete / numChores) * 100.0).toFixed(0).toString() + "%";
  }

  getUserChores(user){

    let choreList = []
    user.chores.forEach(choreObj => {
      choreList.push(choreObj.title)
    })
    return choreList
  }

  addChore(name, id){
    this.getUserByID(id).chores.push({title: name, complete:false, verified:false})
  }

  removeChore(name, id) {
    let list = this.getUserByID(id).chores;
    for(var index = 0; index < list.length; index++) {
      if (list[index].title === name) {
        list.splice(index, 1)
      };
    };
    // console.log(this.getUserChores(this.getUserByID(id)))
  }

  setChoreComplete(title, id) {
    let user = this.getUserByID(id);
    let completedChore = user.chores.find(chore => chore.title === title);
    completedChore.complete = true;
  }

  setChoreVerified(title, id) {
    let user = this.getUserByID(id);
    let completedChore = user.chores.find(chore => chore.title === title);
    completedChore.verified = true;
  }
}