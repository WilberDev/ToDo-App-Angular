import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { TodoTask } from '../interfaces/todo-task';
import { TodoListService } from '../services/todo-list.service';
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
  @ViewChild('editInput') editInput;
  showHideTask = false;
  showHideEditSection = true;
  constructor(private todoListService: TodoListService) { }

  removeTask(): void {
    this.remove.emit(this.task)
  }
  sendToedit() {
    let previostask = this.task
    let taskTobeEdited = this.editInput.nativeElement.innerText;
    this.todoListService.editTask(taskTobeEdited, previostask)
    console.log(taskTobeEdited.title);
  }
  editModeCaller() {
    this.showHideEditSection = !this.showHideEditSection;
    this.showHideTask = !this.showHideTask;
    console.log(this.editInput.nativeElement.innerText)
  }
  ngOnInit(): void {
  }
}