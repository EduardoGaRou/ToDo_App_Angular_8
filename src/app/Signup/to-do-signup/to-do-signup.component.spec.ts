import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSignupComponent } from './to-do-signup.component';

describe('ToDoSignupComponent', () => {
  let component: ToDoSignupComponent;
  let fixture: ComponentFixture<ToDoSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
