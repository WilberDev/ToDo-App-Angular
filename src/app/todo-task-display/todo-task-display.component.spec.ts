import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../services/todo-list.service';

import { TodoTaskDisplayComponent } from './todo-task-display.component';

describe('TodoTaskDisplayComponent', () => {
  let component: TodoTaskDisplayComponent;
  let fixture: ComponentFixture<TodoTaskDisplayComponent>;
  let service: TodoListService;

  /*
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TodoTaskDisplayComponent]
      })
        .compileComponents();
      fixture = TestBed.createComponent(TodoTaskDisplayComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(TodoListService)
    });*/

  beforeEach(() => {
    component = new TodoTaskDisplayComponent(null)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
