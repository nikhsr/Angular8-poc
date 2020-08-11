import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
// import { ReactformComponent } from './reactform/reactform.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchBystreetnameComponent } from './search-bystreetname/search-bystreetname.component';
import { FormsModule } from '@angular/forms';
import { SearchBycityComponent } from './search-bycity/search-bycity.component';
// import { CreatePropertyComponent } from './create-property/create-property.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    PropertyDashboardComponent,
    SearchBystreetnameComponent,
    SearchBycityComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
