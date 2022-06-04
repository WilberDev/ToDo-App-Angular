import { Component } from '@angular/core';
import { TodoTask } from './interfaces/todo-task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
    <h1>
      Welcome {{title}}
    </h1>
  `,*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "ToDo-App";
  todoList: TodoTask[] = [
    {title:'Install Node JS'},
    {title:'Install Angular CLI'},
    {title:'Create new app'},
    {title:'Serve app'},
    {title:'Develop app'},
    {title:'Deploy app'},
  ];

  addTask(value: string){
    this.todoList.push({title: value})
  }
}
