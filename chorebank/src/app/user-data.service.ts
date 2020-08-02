import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  
  user = [
    {
    name: "Jorge",
    percentComplete: "10%",
    gender: "m"
  },
  {
    name: "Aria",
    percentComplete: "75%",
    gender: "f"
  },
  {
    name: "Bobby",
    percentComplete: "15%",
    gender: "m"
  },
  {
    name: "Cameron",
    percentComplete: "5%",
    gender: "f"
  }
]

  getUser() {
    return this.user;
  }
}
