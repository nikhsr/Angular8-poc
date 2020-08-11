import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBycityComponent } from './search-bycity.component';

describe('SearchBycityComponent', () => {
  let component: SearchBycityComponent;
  let fixture: ComponentFixture<SearchBycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
