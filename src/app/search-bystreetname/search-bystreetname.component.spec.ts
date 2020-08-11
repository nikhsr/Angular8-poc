import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBystreetnameComponent } from './search-bystreetname.component';

describe('SearchBystreetnameComponent', () => {
  let component: SearchBystreetnameComponent;
  let fixture: ComponentFixture<SearchBystreetnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBystreetnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBystreetnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
