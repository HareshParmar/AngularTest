import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './userdetail.component';
import { UserDetailRoutingModule } from './userdetail-routing.module';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserDetailRoutingModule
  ],
  declarations: [UserDetailComponent]
})
export class UserDetailModule { }