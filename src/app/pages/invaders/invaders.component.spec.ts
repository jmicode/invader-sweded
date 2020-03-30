import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvadersComponent } from './invaders.component';

describe('InvadersComponent', () => {
  let component: InvadersComponent;
  let fixture: ComponentFixture<InvadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
