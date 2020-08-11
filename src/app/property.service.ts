import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Property } from './property';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'properties');
    
  }
  findPropertiesByCity(city: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-city/' + city);
    
  }

  findPropertiesByState(state:string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-state/' + state);
    
  }

  findPropertiesByZipcode(zip: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-zipcode/' + zip);
    
  }

  findPropertyByStreetName(streetname: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-streetname/' + streetname);
    
  }
  findPropertyByPriceLessThan(value:number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-price-less-than/' + value);
    
  }
  findPropertyByPriceGreaterThan(value:number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.url + 'find-property-by-price-greater-than/' + value);
    
  }

  findOwners(propertyid: number): Observable<Set<User>> {
    return this.httpClient.get<Set<User>>(this.url + 'property-owners/' + propertyid);
    
  }
  
  

  addProperty(data): Observable<Property>{
    return this.httpClient.post<Property>(this.url + 'add-property', JSON.stringify(data), this.httpOptions);
 
  }

  updateProperty(data): Observable<Property>{
    return this.httpClient.post<Property>(this.url + 'update-property', JSON.stringify(data), this.httpOptions);
 
  }
  deleteProperty(id:number):Observable<Property>{
    return this.httpClient.delete<Property>(this.url + 'delete-property/'+id, this.httpOptions);
 
  }

  
}
