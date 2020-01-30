import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
  // Landing component is used as the home component for non-authenticated users
  { path: '', component: LandingComponent, pathMatch: 'full' },
  // and the Home component is used as the hub once logged in
  { path: 'home', component: HomeComponent }, // Will have children
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
