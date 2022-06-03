import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonUnitComponent } from './add-button-unit.component';

describe('AddButtonUnitComponent', () => {
  let component: AddButtonUnitComponent;
  let fixture: ComponentFixture<AddButtonUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonUnitComponent ]
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
