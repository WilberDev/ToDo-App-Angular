import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoListService } from '../services/todo-list.service';

import { ListManagerComponent } from './list-manager.component';

describe('ListManagerComponent', () => {
  let fixture: ComponentFixture<ListManagerComponent>;
  /*let FakeTodoListServices = {
    getTodoList: () => Observable.of('{title: "Wilber"}');
  }*/
  //jasmineSpyOjb
  let component = new ListManagerComponent(null)

  beforeEach(() => {

  })

  it('should create', () => {
    //TodoListServices = TestBed.inject(TodoListService)
    //const component = new ListManagerComponent(null)
    expect(component).toBeTruthy();
    expect(component.title).toEqual("My ToDo's")
  });
});
