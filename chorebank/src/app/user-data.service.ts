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
      balance: 0,
      chores: [
        {
          title: "Wash Dishes",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Walk Dogs",
          value: 0,
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: "2",
      name: "Aria",
      gender: "f",
      balance: 0,
      chores: [
        {
          title: "Pick Up Toys",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Brush Teeth",
          value: 0,
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: "3",
      name: "Tatyana",
      gender: "f",
      balance: 0,
      chores: [
        {
          title: "Wash Clothes",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Clean Room",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Clean Bathroom",
          value: 0,
          complete: false,
          verified: false
        }
      ],
    },
    {
      id: "4",
      name: "Cameron",
      gender: "m",
      balance: 0,
      chores: [
        {
          title: "Feed Dogs",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Vacuum Carpet",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Straighten Family Room",
          value: 0,
          complete: false,
          verified: false
        },
        {
          title: "Put Shoes Away",
          value: 0,
          complete: false,
          verified: false
        }
      ],
    }
  ]

  addUser(name:string, gender:string) {
    let newUser = {};
    this.users.push(
      {
        id: "5",
        name: name,
        gender: gender,
        balance: 0,
        chores: [],
      })
  }

  getUsers() {
    return this.users;
  }

  getUserByID(id) {
    return this.users.find(user => user.id === id)
  }

  getPercentComplete(user) {
    let numChores = user.chores.length;
    if (numChores === 0) {
      return "0"
    }
    let numComplete = 0;
    user.chores.forEach(chore => {
      if (chore.complete){
        numComplete++
      };
    });
    return ((numComplete / numChores) * 100.0).toFixed(0).toString();
  }

  getUserChores(user){

    // let choreList = []
    // user.chores.forEach(choreObj => {
    //   choreList.push(choreObj.title)
    // })
    return user.chores
  }

  addChore(name, id){
    this.getUserByID(id).chores.push({title: name, value: 0, complete:false, verified:false})
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

  setChoreComplete(choreObj, id) {
    let user = this.getUserByID(id);
    let completedChore = user.chores.find(chore => chore.title === choreObj.title);
    completedChore.complete = true;
  }

  setChoreVerified(choreObj, id) {
    let user = this.getUserByID(id);
    let completedChore = user.chores.find(chore => chore.title === choreObj.title);
    completedChore.verified = true;
  }

  getUnverifiedChores(id) {
    let numCompleteUnverified = 0;
    let user = this.getUserByID(id);
    user.chores.forEach(chore => {
      if (chore.complete && !chore.verified) {
        numCompleteUnverified++
      }
    })
    return numCompleteUnverified
  }
}