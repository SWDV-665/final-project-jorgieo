import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-user-chores',
  templateUrl: './user-chores.page.html',
  styleUrls: ['./user-chores.page.scss'],
})
export class UserChoresPage implements OnInit {

  private slugID: string;
  private selectedUser:object;
  private selectedUserChores:any;

  constructor(private route:ActivatedRoute, private userData:UserDataService, private inputDialog: InputDialogService) { }

  ngOnInit() {
    this.slugID = this.route.snapshot.paramMap.get("id")
    
    this.selectedUser = this.userData.getUsers().find(user => user.id === this.slugID)

    this.selectedUserChores = this.userData.getUserChores(this.selectedUser)
  }

  addChore(){
    this.inputDialog.showDialog(this.slugID)
  }

}
