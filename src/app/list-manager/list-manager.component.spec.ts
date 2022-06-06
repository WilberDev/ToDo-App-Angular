import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../services/todo-list.service';

import { ListManagerComponent } from './list-manager.component';

describe('ListManagerComponent', () => {
  let component: ListManagerComponent;
  let fixture: ComponentFixture<ListManagerComponent>;
  let TodoListServices;
  TestBed.configureTestingModule({
    declarations: [ListManagerComponent],
    providers: [TodoListService]
    //providers: [{provide: TodoListService, useValue: TodoListServiceStub}] 

  });

  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListManagerComponent]
    })
    .compileComponents();
  });*/

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    TodoListServices = TestBed.inject(TodoListService)
    expect(component).toBeTruthy();
  });
});
