import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ActiveUsersComponent } from '../components/active-users/active-users.component';
import { HomeComponent } from '../components/home/home.component';
import { UsedResourcesComponent } from '../components/used-resources/used-resources.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "user", component: ActiveUsersComponent},
  {path: "resources", component: UsedResourcesComponent},
  {path: "about_us", component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
