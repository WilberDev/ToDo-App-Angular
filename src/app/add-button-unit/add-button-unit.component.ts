import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button-unit',
  templateUrl: './add-button-unit.component.html',
  styleUrls: ['./add-button-unit.component.scss']
})
export class AddButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title: string = "Hello World";
  ngOnInit(): void {
  }

  submitTask(inputText: string): void {
  //  this.title = inputText;
   this.submit.emit(inputText)
   console.log(inputText)
  }
}
