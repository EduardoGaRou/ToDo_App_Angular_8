import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLoginComponent } from './to-do-login.component';

describe('ToDoLoginComponent', () => {
  let component: ToDoLoginComponent;
  let fixture: ComponentFixture<ToDoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
