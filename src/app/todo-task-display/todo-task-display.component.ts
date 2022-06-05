import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
//import { EventEmitter } from 'stream';
import { TodoTask } from '../interfaces/todo-task';

@Component({
  selector: 'app-todo-task-display',
  templateUrl: './todo-task-display.component.html',
  styleUrls: ['./todo-task-display.component.scss']
})

export class TodoTaskDisplayComponent implements OnInit {
  //This evaluates that all incoming values are correct
  //Before sending them to the 
  @Input() task: TodoTask;
  @Output() remove: EventEmitter<TodoTask> = new EventEmitter<TodoTask>();
  @Output() edit: EventEmitter<TodoTask> = new EventEmitter<TodoTask>();
  @ViewChild('inputText') InputText;
  constructor() { }
  
  removeTask(): void {
    this.remove.emit(this.task)
  }
  showSomething(task){
    //index = 
    //this.InputText.nativeElement.value = task;
    //console.log('task clicked!!' + task )
    this.edit.emit(this.task)
  }
  ngOnInit(): void {
    console.log("@Input() " + this.task.title)
  }
}
//