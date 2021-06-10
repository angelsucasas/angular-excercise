import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsedResourcesComponent } from './used-resources/used-resources.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    ActiveUsersComponent,
    UsedResourcesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class ComponentModule { }
