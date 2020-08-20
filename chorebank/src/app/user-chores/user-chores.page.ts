import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-chores',
  templateUrl: './user-chores.page.html',
  styleUrls: ['./user-chores.page.scss'],
})
export class UserChoresPage implements OnInit {

  private slug: string;
  private selectedUser:object;
  private selectedUserChores:any;

  constructor(private route:ActivatedRoute, private userData:UserDataService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get("id")
    console.log(this.slug)
    
    this.selectedUser = this.userData.getUsers().find(user => user.id === this.slug)
    console.log(this.selectedUser)

    this.selectedUserChores = this.userData.getUserStats(this.selectedUser).choreList
    console.log(this.selectedUserChores)
  }

  addChore(){
    console.log("add a chore")
  }

}
