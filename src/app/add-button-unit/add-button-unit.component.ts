import { createInjectableDefinitionMap } from '@angular/compiler/src/render3/partial/injectable';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-button-unit',
  templateUrl: './add-button-unit.component.html',
  styleUrls: ['./add-button-unit.component.scss']
})
export class AddButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputText') inputText;
  title: string = "Hello World";
  ngOnInit(): void {

  }
  submitTask(inputText: string): void {
    this.submit.emit(inputText)
    this.inputText.nativeElement.value = '';
  }
}
