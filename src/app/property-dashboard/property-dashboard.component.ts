import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PropertyService } from '../property.service';
import { User } from '../user';
import { Property } from '../property';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.css']
})
export class PropertyDashboardComponent {
  
  propertyList: Property[];
  constructor(private breakpointObserver: BreakpointObserver, private propertyService: PropertyService) { }
  
  ngOnInit() {

    this.propertyService.getAllProperties().subscribe({
      next: (data) => { this.propertyList = data },
      error: (err) => { console.log(err) },
      complete:()=>console.log('done')
    });
  }
}
