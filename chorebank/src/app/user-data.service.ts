import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  
  user = [
    {
    name: "Jorge",
    percentComplete: "10%"
  },
  {
    name: "Aria",
    percentComplete: "75%"
  }
]

  getUser() {
    return this.user;
  }
}
