import { Injectable } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: TodoTask[] = [
    {title:'Install Node JS'},
    {title:'Install Angular CLI'},
    {title:'Create new app'},
    {title:'Serve app'},
    {title:'Develop app'},
    {title:'Deploy app'},
  ];

  constructor() { }

  getTodoList(): TodoTask[] {
    return this.todoList;
  }
}
