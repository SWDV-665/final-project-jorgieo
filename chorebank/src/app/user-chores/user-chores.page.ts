import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-user-chores',
  templateUrl: './user-chores.page.html',
  styleUrls: ['./user-chores.page.scss'],
})
export class UserChoresPage {

  // private slugID: string;
  // private selectedUser:object;


  constructor(private route:ActivatedRoute, private userData:UserDataService, private inputDialog: InputDialogService) { }


  slugID = this.route.snapshot.paramMap.get("id")
    
  selectedUser = this.userData.getUserByID(this.slugID)

  getChores(){
    return this.userData.getUserChores(this.selectedUser)
  }
  
  addChore(){
    this.inputDialog.showDialog(this.slugID)
  }

  markComplete(chore){
    this.userData.setChoreComplete(chore, this.slugID);
  }

  markVerified(chore){
    this.userData.setChoreVerified(chore, this.slugID);
  }

  removeChore(chore) {
    this.userData.removeChore(chore, this.slugID)
  }

}
