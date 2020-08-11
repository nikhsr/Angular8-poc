import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-search-bycity',
  templateUrl: './search-bycity.component.html',
  styleUrls: ['./search-bycity.component.css']
})
export class SearchBycityComponent implements OnInit {

  city:string = '';
  propertyList: Property[];
  flag = false;
  constructor(private propertyService:PropertyService) { }
  
  ngOnInit() {

  }

  searchBycity = () => {
    this.propertyService.findPropertiesByCity(this.city)
    .subscribe({
      next: (data) => { this.propertyList = data, this.flag=true },
      error: (err) => { console.log(err) },
      complete:()=>console.log('done')
    });
  }

}
