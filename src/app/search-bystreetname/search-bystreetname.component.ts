import { Component, OnInit, Input } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';

@Component({
  selector: 'app-search-bystreetname',
  templateUrl: './search-bystreetname.component.html',
  styleUrls: ['./search-bystreetname.component.css']
})
export class SearchBystreetnameComponent implements OnInit {

  streetname:string = '';
  propertyList: Property[];
  flag = false;
  constructor(private propertyService:PropertyService) { }
  
  ngOnInit() {

  }

  searchBystreetname = () => {
    this.propertyService.findPropertyByStreetName(this.streetname)
    .subscribe({
      next: (data) => { this.propertyList = data, this.flag=true },
      error: (err) => { console.log(err) },
      complete:()=>console.log('done')
    });
  }

}
