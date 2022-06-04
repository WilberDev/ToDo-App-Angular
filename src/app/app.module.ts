import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddButtonUnitComponent } from './add-button-unit/add-button-unit.component';
import { TodoTaskDisplayComponent } from './todo-task-display/todo-task-display.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonUnitComponent,
    TodoTaskDisplayComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
