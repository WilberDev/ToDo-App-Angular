import { Component, OnInit, } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = "ToDo-App";
  todoList: TodoTask[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addTask(value: string){
    this.todoList.push({title: value})
  }
  
}
