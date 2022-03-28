import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../gh-users/users/models/ghRepos';
import { GhUser } from '../../gh-users/users/models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  username:string = ''
  user: GhUser | null = null
  ListRepositorys: GhRepos[] | undefined; 

  constructor(private ghService: GhApiService) { }

  ngOnInit(): void {
    
    this.ghService.findUser(this.username).subscribe(
      (usuario)=> 
      this.user = usuario
    )

    this.ghService.findRepositoryName(this.username).subscribe(
      (usuario)=> 
      this.ListRepositorys = usuario
    )
  }

}
