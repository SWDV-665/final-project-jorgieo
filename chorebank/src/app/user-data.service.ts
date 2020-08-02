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
  }
]

  getUser() {
    return this.user;
  }
}
