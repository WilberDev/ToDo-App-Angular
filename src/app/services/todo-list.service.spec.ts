import { TestBed } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService
  let database = [], task1, task2;
  //let localStg = JSON.parse(localStorage.getItem('todo_List'))
  //let cleanlocalStg = localStorage.clear()
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TodoListService] })
    service = TestBed.inject(TodoListService);
    database = service.getTodoList();
    task1 = { title: "Go tp the gym" }
    task2 = { title: "Go tp the SuperMar" }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Should add tasks', () => {
    service.addTask(task1)
    expect(database[0]).toEqual(task1)
    expect(database.length).toEqual(1)
  })
  it('Should delete a task', () => {
    service.deleteTask(task1)
    expect(database[0]).toBeUndefined()
  })

  it('Should edit a task', () => {
    service.addTask(task1)
    console.log(database);
    let previostask = database[0];
    let task1v2 = "Go to pick your cousin at school"
    service.editTask(task1v2, previostask)
    expect(database[0].title).toEqual(task1v2)
  })
  afterEach(() => {
    localStorage.clear()
  })
});
