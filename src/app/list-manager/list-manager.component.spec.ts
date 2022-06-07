import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoListService } from '../services/todo-list.service';

import { ListManagerComponent } from './list-manager.component';

describe('ListManagerComponent', () => {
  let fixture: ComponentFixture<ListManagerComponent>;
  let component: ListManagerComponent;
  let FakeTodoListService: TodoListService;

  beforeEach(() => {
    component = new ListManagerComponent(FakeTodoListService)

  })

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual("My ToDo's")
  });
});
