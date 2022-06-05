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

  //By adding private or public typeScript assign the parameter to it.
  //So, it might work like this. this.todoListService = todoListService;
  constructor(private todoListService: TodoListService) {}

  //This indicate component is done, I used it to add tasks on screen from the database.
  //Using the method getTodolist()
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  getTask(title: string): void{
    if (title != null && title != '') {
      this.todoListService.addTask({title});
    }
  }
  removeTask(task): void{
    this.todoListService.deleteTask(task);
    //console.log("RemoveMG remove called!" + task.title )
  }
  editTask(task): void {
    //this.todoListService.editTask(task);
    console.log("listMG editTask called!" + task.title )
  }
}
