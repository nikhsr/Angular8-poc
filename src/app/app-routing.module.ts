import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { AboutComponent } from './about/about.component';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { UsersComponent } from './users/users.component';
import { SearchBystreetnameComponent } from './search-bystreetname/search-bystreetname.component';
import { SearchBycityComponent } from './search-bycity/search-bycity.component';

const routes: Routes = [
{ path: '', component: AboutComponent },
{ path: 'about', component: AboutComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'user', component: UsersComponent },
  { path: 'search-by-streetname', component: SearchBystreetnameComponent },
  {path:'search-by-city', component:SearchBycityComponent},
  { path: 'dashboard', component: PropertyDashboardComponent }

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,PropertyComponent,PropertyDashboardComponent,UsersComponent,SearchBystreetnameComponent,SearchBycityComponent]