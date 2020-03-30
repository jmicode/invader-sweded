import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvaderFormComponent } from './invader-form.component';

describe('InvaderFormComponent', () => {
  let component: InvaderFormComponent;
  let fixture: ComponentFixture<InvaderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
