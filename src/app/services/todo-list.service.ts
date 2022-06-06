import { Injectable } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';
import { StorageService } from './storage.service';


const todoListStoragekey = 'todo_List';

const defaultTodoList: TodoTask[] = [
  /*{ title: 'Install Node JS' },
  { title: 'Install Angular CLI' },
  { title: 'Create new app' },
  { title: 'Serve app' },
  { title: 'Develop app' },
  { title: 'Deploy app' },
  { title: 'Be happy' },*/
];

@Injectable()
export class TodoListService {
  private todoList: TodoTask[];

  constructor(private storageService: StorageService) {
    this.todoList = //defaultTodoList
      storageService.getData(todoListStoragekey) || defaultTodoList;
  }
  saveTaskList(): void {
    this.storageService.setData(todoListStoragekey, this.todoList);
  }
  /**/getTodoList(): TodoTask[] {
    return this.todoList;
  }
  addTask(task: TodoTask): void {
    this.todoList.push(task)
    this.saveTaskList();
  }
  deleteTask(task: TodoTask): void {
    const index = this.todoList.indexOf(task)
    this.todoList.splice(index, 1)
    this.saveTaskList();
  }
  editTask(task, previostask: TodoTask): void {
    let index = this.todoList.indexOf(previostask)
    this.todoList.splice(index, 1, { title: task })
    this.saveTaskList();
  }
}
