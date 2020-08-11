import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  propertyList: Property[];
  constructor(private propertyService:PropertyService) { }

  ngOnInit() {

    this.propertyService.getAllProperties().subscribe({
      next: (data) => { this.propertyList = data },
      error: (err) => { console.log(err) },
      complete:()=>console.log('done')
    });
  }

}
