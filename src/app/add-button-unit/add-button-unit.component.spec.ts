import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../services/todo-list.service';

import { AddButtonUnitComponent } from './add-button-unit.component';

describe('AddButtonUnitComponent', () => {
  let component: AddButtonUnitComponent;
  let fixture: ComponentFixture<AddButtonUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddButtonUnitComponent],
      providers: [TodoListService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
