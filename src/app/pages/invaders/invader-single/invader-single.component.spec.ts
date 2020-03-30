import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvaderSingleComponent } from './invader-single.component';

describe('InvaderSingleComponent', () => {
  let component: InvaderSingleComponent;
  let fixture: ComponentFixture<InvaderSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvaderSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvaderSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
