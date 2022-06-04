import { Component, OnInit, } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = "ToDo-App";
  todoList: TodoTask[] = [
    {title:'Install Node JS'},
    {title:'Install Angular CLI'},
    {title:'Create new app'},
    {title:'Serve app'},
    {title:'Develop app'},
    {title:'Deploy app'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string){
    this.todoList.push({title: value})
  }
}
