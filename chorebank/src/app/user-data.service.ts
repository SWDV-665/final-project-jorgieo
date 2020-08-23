import { Injectable } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

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
          value: 2,
          complete: false,
          verified: false
        },
        {
          title: "Walk Dogs",
          value: 5,
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
          value: 2,
          complete: false,
          verified: false
        },
        {
          title: "Brush Teeth",
          value: 3,
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
          value: 5,
          complete: false,
          verified: false
        },
        {
          title: "Clean Room",
          value: 5,
          complete: false,
          verified: false
        },
        {
          title: "Clean Bathroom",
          value: 10,
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
          value: 5,
          complete: false,
          verified: false
        },
        {
          title: "Vacuum Carpet",
          value: 10,
          complete: false,
          verified: false
        },
        {
          title: "Straighten Family Room",
          value: 10,
          complete: false,
          verified: false
        },
        {
          title: "Put Shoes Away",
          value: 2,
          complete: false,
          verified: false
        }
      ],
    }
  ]

  addUser(name:string, gender:string) {
    let userIDs = [];
    this.users.forEach(user => userIDs.push(parseInt(user.id)))
    let newID = Math.max(...userIDs) + 1;
    this.users.push(
      {
        id: `${newID}`,
        name: name,
        gender: gender,
        balance: 0,
        chores: [],
      })
  }

  editUser(name:string, gender:string, id:string) {
    let user = this.getUserByID(id);
    user.name = name;
    user.gender = gender;
  }

  getUsers() {
    return this.users;
  }

  getUserByID(id) {
    return this.users.find(user => user.id === id)
  }

  removeUser(user) {
    for(var index = 0; index < this.users.length; index++) {
      if (this.users[index].name === user.name) {
        this.users.splice(index, 1)
      };
    }
    
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
    return user.chores
  }

  addChore(name:string, value:any, id:number){
    this.getUserByID(id).chores.push({title: name, value: parseInt(value), complete:false, verified:false})
    // console.log(this.getUserByID(id))
  }

  removeChore(choreObj, id) {
    let list = this.getUserByID(id).chores;
    for(var index = 0; index < list.length; index++) {
      if (list[index].title === choreObj.title) {
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

  addToBank(choreObj, id) {
    let user = this.getUserByID(id);
    let verifiedChore = user.chores.find(chore => chore.title === choreObj.title);
    user.balance += verifiedChore.value;
    this.removeChore(verifiedChore, id);
  }
  withdrawFromBank(cash, id) {
    let user = this.getUserByID(id);
    user.balance -= cash;
  }
}