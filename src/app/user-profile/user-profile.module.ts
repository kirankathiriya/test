import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material.module';
import { UserProfileRoutingModule } from './user-profile.routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, AngularMaterialModule, UserProfileRoutingModule],
})
export class UserProfileModule {}
