import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/gh-dialog/dialog/dialog.component';
import { UsersComponent } from './components/gh-users/users/users.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    DialogComponent,
       UsersComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  exports:[
    UsersComponent
  ]
})
export class GitModuleModule { }
