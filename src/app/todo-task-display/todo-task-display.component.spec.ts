import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskDisplayComponent } from './todo-task-display.component';

describe('TodoTaskDisplayComponent', () => {
  let component: TodoTaskDisplayComponent;
  let fixture: ComponentFixture<TodoTaskDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
