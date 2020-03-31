import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySingleComponent } from './city-single.component';

describe('CitySingleComponent', () => {
  let component: CitySingleComponent;
  let fixture: ComponentFixture<CitySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
