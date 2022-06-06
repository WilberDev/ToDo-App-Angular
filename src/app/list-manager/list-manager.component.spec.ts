import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoListService } from '../services/todo-list.service';

import { ListManagerComponent } from './list-manager.component';

describe('ListManagerComponent', () => {
  let fixture: ComponentFixture<ListManagerComponent>;
  let component: ListManagerComponent;
  let FakeTodoListService

  //jasmine.createSpyObj('todo-listService', ['getTodolist']);
  //FakeTodoListService.getTodoList.and.returnValue(Observable.of('{title: Wilber meeting}'))


  /*let FakeTodoListServices = {
    getTodoList: () => Observable.of('{title: "Wilber"}');
  }*/
  //jasmineSpyOjb

  beforeEach(() => {
    FakeTodoListService = {}
    component = new ListManagerComponent(FakeTodoListService)

  })

  it('should create', () => {
    //TodoListServices = TestBed.inject(TodoListService)
    //const component = new ListManagerComponent(null)
    expect(component).toBeTruthy();
    expect(component.title).toEqual("My ToDo's")
  });
});
