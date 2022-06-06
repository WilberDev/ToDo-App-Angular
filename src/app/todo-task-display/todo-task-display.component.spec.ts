import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../services/todo-list.service';
import { TodoTaskDisplayComponent } from './todo-task-display.component';

//let TodoListServices;
let service;
let database;
describe('TodoTaskDisplayComponent', () => {
  let component: TodoTaskDisplayComponent;
  let fixture: ComponentFixture<TodoTaskDisplayComponent>;
  /* */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTaskDisplayComponent],
      providers: [TodoListService]
    })
      .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTaskDisplayComponent],
      providers: [TodoListService]
    })
    fixture = TestBed.createComponent(TodoTaskDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
