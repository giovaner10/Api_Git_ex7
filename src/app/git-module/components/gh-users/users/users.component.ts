import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../gh-dialog/dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usernameToFind: FormControl = new FormControl('',[Validators.required])
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDialog():void{
    let user = this.dialog.open(DialogComponent, {width: '800px'})

    user.componentInstance.username = this.usernameToFind.value
  }

}
