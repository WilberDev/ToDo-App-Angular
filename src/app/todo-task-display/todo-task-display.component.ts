import { Component, Input, OnInit } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';

@Component({
  selector: 'app-todo-task-display',
  templateUrl: './todo-task-display.component.html',
  styleUrls: ['./todo-task-display.component.scss']
})
export class TodoTaskDisplayComponent implements OnInit {
  @Input() task: TodoTask;

  constructor() { }

  ngOnInit(): void {
  }

}
