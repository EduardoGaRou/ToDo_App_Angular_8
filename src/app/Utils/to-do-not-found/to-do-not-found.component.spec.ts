import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNotFoundComponent } from './to-do-not-found.component';

describe('ToDoNotFoundComponent', () => {
  let component: ToDoNotFoundComponent;
  let fixture: ComponentFixture<ToDoNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
